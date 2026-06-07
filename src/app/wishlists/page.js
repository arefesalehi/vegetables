import AllBreadCrumb from '@/components/modules/AllBreadCrumb/AllBreadCrumb'
import Detailbar from '@/components/modules/detailBar/Detailbar'
import Footer from '@/components/modules/footer/Footer'
import Navbar from '@/components/modules/navbar/Navbar'
import NewsLetter from '@/components/templates/products/NewsLetter'
import WishlistBox from '@/components/templates/wishlists/WishlistBox'
import { authUser } from '@/utils/serverHelpers'
import wishlistModel from '@/models/wishlist'
import connectToDB from '@/configs/db'
import ShoppingMenue from '@/components/modules/shoppingMenu/ShoppingMenue'

const page = async () => {
  let wishes = []
  connectToDB()
  const user = await authUser()

  console.log('wishlist User=>', user)
  if (user) {
    wishes = await wishlistModel
      .find({ user: user._id })
      .populate('product', 'price count name img _id ')
      .lean()

  }
  console.log('wishesssssssssss=>', wishes)

  return (
    <>
    <ShoppingMenue/>
      <div className="w-full bg-black h-[100px]">
        {/* <Navbar isLogin={ user ? true : false}  /> */}
      </div>
      <Detailbar  />
      <AllBreadCrumb route="لیست علاقه مندی ها" />
      <div className=" w-[80%] md:w-[98%] lg:w-[80%] m-auto  ">
        {wishes.length > 0 && (
          <WishlistBox wishes={JSON.parse(JSON.stringify(wishes))} />
        )}

        {wishes.length === 0 && (
          <div className="w-full h-[100px] mt-20  p-5 rounded-[10px] text-xl md:text-3xl text-center flex justify-center items-center bg-pink-200">
            {' '}
            هیچ محصولی در سبد علاقه مندی ها وجود ندارد
          </div>
        )}
      </div>
      <NewsLetter />
      <Footer />
    </>
  )
}

export default page
