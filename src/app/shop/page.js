import AllBreadCrumb from '@/components/modules/AllBreadCrumb/AllBreadCrumb'
import Detailbar from '@/components/modules/detailBar/Detailbar'
import Navbar from '@/components/modules/navbar/Navbar'
import FilterShop from '@/components/templates/shop/FilterShop'

import ShopSlider from '@/components/templates/shop/ShopSlider'
import React from 'react'
import menuModel from '@/models/menu'
import productModel from '@/models/product'
import Footer from '@/components/modules/footer/Footer'
import NewsLetter from '@/components/templates/products/NewsLetter'
const page = async () => {

  const menues = await menuModel.find({})
  console.log('menus in shop =>', menues);

  const products = await productModel.find({})
  console.log('products in shop=>', products);


  return (
    <>
      <div className="w-full bg-black h-[100px]">
        {/* <Navbar /> */}
      </div>
      <Detailbar />
      <AllBreadCrumb route='فروشگاه' />
      <ShopSlider menues={JSON.parse(JSON.stringify(menues))} />
      <FilterShop products={JSON.parse(JSON.stringify(products))} />
      <NewsLetter />
      <Footer />





    </>
  )
}

export default page