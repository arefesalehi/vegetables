import BreadCrumb from '@/components/modules/BreadCrumb/BreadCrumb'
import Detailbar from '@/components/modules/detailBar/Detailbar'
import Navbar from '@/components/modules/navbar/Navbar'
import productModel from '@/models/product'
import ProductDetail from '@/components/templates/products/Detail/productDetail'
import React from 'react'
import connectToDB from '@/configs/db'
import commentModel from '@/models/comment'

const page = async({params}) => {
  connectToDB() 
  const productID= params.id
  
  const product= await productModel.findOne({_id:productID}).populate('comments')
  console.log('product=>',product);

  return (
    <>
    <div className='w-full bg-black h-[100px]'>
    {/* <Navbar /> */}
    </div>
    <Detailbar/>
    <BreadCrumb  products={JSON.parse(JSON.stringify(product))}  />
    <ProductDetail  products={JSON.parse(JSON.stringify(product))} />



    </>
  )
}

export default page