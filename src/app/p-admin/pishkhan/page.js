import AdminPanelLayout from '@/components/layouts/AdminPanelLayout'
import PishkhanCard from '@/components/templates/p-admin/PishkhanCard'

const page = () => {
  return (
    <>
      <AdminPanelLayout>
        <div className="mycontainer m-auto">
          <div className="flex flex-wrap m-auto  ">
            <PishkhanCard />
            <PishkhanCard />
            <PishkhanCard />
            <PishkhanCard />
          </div>

          <div className=" flex mt-20 justify-between items-center">
            <div className="w-1/3 ml-5">
              <div className="w-full h-[450px] bg-red-200">
                <span>امار فروش</span>
              </div>
            </div>
            <div className="w-1/3 ml-5">
              {' '}
              <div className="w-full h-[450px] bg-red-400">
                <span> نرخ فروش</span>
              </div>
            </div>
            <div className="w-1/3">
              {' '}
              <div className="w-full h-[450px] bg-red-600">
                <span>نمودار میله ای </span>
              </div>
            </div>
          </div>
        </div>
      </AdminPanelLayout>
    </>
  )
}

export default page
