import React from 'react'
import Ticket from './Ticket'
import { authUser } from '@/utils/serverHelpers'
import ticketModel from '@/models/ticket'
const AllTickets =async () => {

  const user = await authUser()
  const tickets = await ticketModel.find({user:user._id , isAnswer:false}).populate('department').sort({_id:-1})
  console.log('tickets===>',tickets);
  

  return (
    <>
  
      <Ticket  tickets={JSON.parse(JSON.stringify(tickets))} />
      
    </>
  )
}

export default AllTickets
