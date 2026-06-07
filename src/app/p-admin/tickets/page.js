import AdminPanelLayout from '@/components/layouts/AdminPanelLayout'
import TicketTable from '@/components/templates/p-admin/TicketTable'
import React from 'react'
import ticketModel from '@/models/ticket'
import Titles from '@/components/templates/p-admin/Titles'
const page = async () => {


    const tickets = await ticketModel.find({isAnswer:false}).populate('department').populate('user').lean()
    console.log('ticketsssssss=>', tickets);
    


    return (
        <>
            <AdminPanelLayout>
                <Titles title='تیکت ها' />
                {
                    tickets.length === 0 ? (
                        <div className='w-full h-[80px] bg-red-700 text-white flex justify-center items-center text-2xl mt-20'>
                            <p>هیچ تیکتی ثبت نشده است</p>
                        </div>) : (<TicketTable tickets={JSON.parse(JSON.stringify(tickets))} />)
                }



            </AdminPanelLayout>



        </>
    )
}

export default page