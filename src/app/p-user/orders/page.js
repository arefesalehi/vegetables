import UserPanelLayout from '@/components/layouts/UserPanelLayout'
import UserPanelAlert from '@/components/modules/p-user/UserPanelAlert'
import CartTable from '@/components/templates/cart/CartTable'

import { FaBell } from 'react-icons/fa'

import OrderTable from '@/components/templates/p-user/OrderTable'

const page = () => {
 

  return (
    <UserPanelLayout>
      <UserPanelAlert
        icon={<FaBell className="text-white " />}
        title=" هیچ سفارشی هنوز ثبت نشده است . "
        link="مشاهده و مرور محصولات"
      />
      
     <OrderTable   />
        


    </UserPanelLayout>
  )
}

export default page
