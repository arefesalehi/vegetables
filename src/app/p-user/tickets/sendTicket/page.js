import UserPanelLayout from '@/components/layouts/UserPanelLayout'
import UserPanelAlert from '@/components/modules/p-user/UserPanelAlert'
import SendTicket from '@/components/templates/p-user/SendTicket'
import { FaBell } from 'react-icons/fa'
import departmentModel from '@/models/department'
import subdepartmentModel from '@/models/subDepartment'
const page = async() => {


  
  
  return (
    <UserPanelLayout>
      <UserPanelAlert
        icon={<FaBell className="text-white" />}
        title="همه تیکت ها "
        link=" ارسال تیکت جدید  "
      />

     <SendTicket   />

   
    </UserPanelLayout>
  )
}

export default page