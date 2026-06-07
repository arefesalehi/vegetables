import React from 'react'
import AdminPanelLayout from '../../components/layouts/AdminPanelLayout'
import PishkhanCard from '@/components/templates/p-admin/PishkhanCard'
import ticketModel from '@/models/ticket'
import productModel from '@/models/product'
import userModel from '@/models/user'
import connectToDB from '@/configs/db'
import SaleChart from '@/components/templates/p-admin/SaleChart'
import GrowthChart from '@/components/templates/p-admin/GrowthChart'
import BarChart from '@/components/templates/p-admin/BarChart'

const page =async () => {

connectToDB()
  const tickets = await ticketModel.find().lean()
  const products = await productModel.find().lean()
  const users = await userModel.find().lean()

   


 

  return (
    <>
      <AdminPanelLayout>
        <div className="mycontainer m-auto">
          <div className="flex flex-wrap m-auto  ">
            <PishkhanCard title='مجموع تیکت دریافتی' value={tickets.length} />
            <PishkhanCard title='مجموع محصولات سایت' value={products.length} />
            <PishkhanCard title='مجموع سفارشات' value={users.length} />
            <PishkhanCard title='مجموع کاربرهای سایت' value={users.length} />
          </div>

          <div className=" flex mt-20 justify-between items-center">
            <div className="w-1/3 ml-5">
              <div className="w-full h-[450px] bg-green-100">
                <span>امار فروش</span>

                <SaleChart/>
              </div>
            </div>
            <div className="w-1/3 ml-5">
              {' '}
              <div className="w-full h-[450px] bg-green-200">
                <span> نرخ فروش</span>
                <GrowthChart/>
              </div>
            </div>
            <div className="w-1/3">
              {' '}
              <div className="w-full h-[450px] bg-green-100">
                <span>نمودار میله ای </span>
                <BarChart/>
              </div>
            </div>
          </div>
        </div>
      </AdminPanelLayout>
    </>
  )
}

export default page