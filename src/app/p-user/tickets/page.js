import UserPanelLayout from '@/components/layouts/UserPanelLayout'
import UserPanelAlert from '@/components/modules/p-user/UserPanelAlert'
import AllTickets from '@/components/templates/p-user/AllTickets'
import React from 'react'
import { FaBell } from 'react-icons/fa'

const page = () => {
  return (
    <UserPanelLayout>
      <UserPanelAlert
        icon={<FaBell className="text-white" />}
        title="همه تیکت ها "
        link=" ارسال تیکت جدید  "
        // to={`/p-user/tickets/sendTicket`}
      />

  
      <AllTickets />
    </UserPanelLayout>
  )
}

export default page
