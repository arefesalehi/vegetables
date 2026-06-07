import BreadCrumb from "@/components/modules/BreadCrumb/BreadCrumb"
import Detailbar from "@/components/modules/detailBar/Detailbar"
import Footer from "@/components/modules/footer/Footer"
import Navbar from "@/components/modules/navbar/Navbar"
import NewsDetail from "@/components/templates/news/NewsDetail"
import connectToDB from "@/configs/db"
import newsModel from '@/models/news'

const page = async({params}) => {
  connectToDB()
 const newsID = params.id
   const newses = await newsModel.findOne({_id:newsID})
   console.log('newsesssssssssss=>', newses);
   

  return (
    <>
     <div className='w-full bg-black h-[100px]'>
    {/* <Navbar /> */}
    </div>
    <Detailbar/>
    <BreadCrumb/>
    <NewsDetail newses={JSON.parse(JSON.stringify(newses))}/>
   <Footer/>


    </>
  )
}

export default page