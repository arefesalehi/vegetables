import AdminPanelLayout from '@/components/layouts/AdminPanelLayout'
import OffForm from '@/components/templates/p-admin/OffForm'
import OffTable from '@/components/templates/p-admin/OffTable'
import React from 'react'
import discountModel from '@/models/discount'
import Titles from '@/components/templates/p-admin/Titles'

const page =async () => {


    const discount = await discountModel.find({}).sort({_id:-1})
    console.log('discount=>', discount);
    

    
  return (
    <>

    <AdminPanelLayout>
      <Titles title='تخفیفات' />

        <OffForm/>
         {discount.length === 0 ? ( <div className='w-full h-[80px] bg-red-700 text-white flex justify-center items-center text-2xl mt-20'>
         <p>هیچ کد تخفیفی وجود ندارد</p>  
        </div>):(<OffTable  discounts={JSON.parse(JSON.stringify(discount))} />)}
          
    </AdminPanelLayout>


    </>
  )
}

export default page