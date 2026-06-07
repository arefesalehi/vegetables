// 'use client'
import Navbar from "@/components/modules/navbar/Navbar"
import Detailbar from "@/components/modules/detailBar/Detailbar"
import Stepper from "@/components/templates/cart/Stepper"
import NewsLetter from "@/components/templates/products/NewsLetter"
import Footer from "@/components/modules/footer/Footer"
import CartTable from "@/components/templates/cart/CartTable"


const page = async() => {

  


    
  

  return (
    <>
     <div className='w-full bg-black h-[100px]'>
    {/* <Navbar /> */}
    </div>
    <Detailbar/>
    <Stepper step='cart'/>
   
    <CartTable    />
    <NewsLetter/>
    <Footer/>


    </>
  )
}

export default page