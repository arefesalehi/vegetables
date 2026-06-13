import Footer from '@/components/modules/footer/Footer'
import Navbar from '@/components/modules/navbar/Navbar'
import Banner from '@/components/templates/index/Banner/Banner'
import BestSeller from '@/components/templates/index/bestSeller/BestSeller'
import CustomerComments from '@/components/templates/index/customerComments/CustomerComments'
import DeliveryBox from '@/components/templates/index/deliveryBox/DeliveryBox'
import LatestNews from '@/components/templates/index/latestNews/LatestNews'
import Menu from '@/components/templates/index/menu/Menu'
import Promote from '@/components/templates/index/promote/Promote'
import Promote2 from '@/components/templates/index/promote2/Promote2'
import UniqueProduct from '@/components/templates/index/uniqueProduct/UniqueProduct'
import ZoomImage from '@/components/templates/index/zoomImg/ZoomImage'
import { authUser } from '@/utils/serverHelpers'
import productModel from '@/models/product'
import menuModel from '@/models/menu'
import commentModel from '@/models/comment'
import newsModel from '@/models/news'
import Drawer from '@/components/templates/index/drawer/Drawer'
import { CartProvider } from '@/context/Cartcontex'
import ShoppingMenue from '@/components/modules/shoppingMenu/ShoppingMenue'
import connectToDB from '@/configs/db'


const page = async () => {

  await connectToDB()
   const dynamic = "force-dynamic"; // مهم برای جلوگیری از اجرای DB در build
  const user = await authUser() || {}
  console.log('user homepage=>', user);

  const products = await productModel.find({})
  console.log('products=>', products);

  const menus = await menuModel.find({})
  console.log('menus=>', menus);

  const comments = await commentModel.find({})
  const newses = await newsModel.find({})


  

  return (
    <>

      <ShoppingMenue/>
      <Banner />
      <Menu menus={JSON.parse(JSON.stringify(menus))} />
      <Promote />
      <ZoomImage />
      <BestSeller user={JSON.parse(JSON.stringify(user || {}))} products={JSON.parse(JSON.stringify(products || []))} />
      <CustomerComments comments={JSON.parse(JSON.stringify(comments))} />
      <UniqueProduct user={JSON.parse(JSON.stringify(user || {}))} products={JSON.parse(JSON.stringify(products))} />
      <Promote2 />
      <div className=" flex xl:w-[80%] w-[95%] gap-3 m-auto flex-wrap lg:flex-nowrap ">

        <DeliveryBox
          img="/images/quality.png"
          alt='delivery'
          title="کیفیت برتر"
          desc="در تمام سفارش‌های تهران یا سفارش‌های بالای 500 هزار تومان  "
        />

        <DeliveryBox
          img="/images/fresh.png"
          alt='fresh'
          title="همیشه تازه"
          desc="در تمام سفارش‌های تهران یا سفارش‌های بالای 500 هزار تومان"
        />

        <DeliveryBox
          img="/images/delivery-icon.png"
          alt='free'
          title="ارسال رایگان"
          desc="در تمام سفارش‌های تهران یا سفارش‌های بالای 500 هزار تومان"
        />

      </div>
      <LatestNews newses={JSON.parse(JSON.stringify(newses))} user={JSON.parse(JSON.stringify(user || {}))} />
      <Footer />
    </>
  )
}

export default page



