import AdminPanelLayout from '@/components/layouts/AdminPanelLayout'
import CommentTable from '@/components/templates/p-admin/CommentTable'
import Titles from '@/components/templates/p-admin/Titles'
import connectToDB from '@/configs/db'
import commentModel from '@/models/comment'


const page =async () => {
connectToDB()
  const comments = await commentModel.find({}).populate('productID')
  console.log('commentsssssssssss=>', comments);
  

  return (
    <AdminPanelLayout>
     <Titles title='کامنت ها' />
    <div className='mycontainer'>
    <CommentTable comments={JSON.parse(JSON.stringify(comments))}  />
    </div>
        
    </AdminPanelLayout>
  )
}

export default page