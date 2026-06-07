import UserPanelLayout from '@/components/layouts/UserPanelLayout'
import Answer from '@/components/templates/p-user/Answer'
import { authUser } from '@/utils/serverHelpers'
import Image from 'next/image'
import ticketModel from '@/models/ticket'
import { PathParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime'
import connectToDB from '@/configs/db'


const page = async ({ params }) => {

  const user = authUser()
  const ticketId = params.id
  connectToDB()
  const tickets = await ticketModel.findOne({ _id: ticketId }).populate('user', "name role").lean()
  console.log('tickets', tickets);

  const answerTicket = await ticketModel.findOne({ mainTicket: tickets._id })
    .populate('user', 'name role')
    .populate('mainTicket')
  console.log('answeTicket===>', answerTicket);


  return (
    <>
      <UserPanelLayout>
        <div className="flex flex-col mt-10 mr-5 ml-5">
          <div className='flex'>
            <div className="w-1/2 h-auto mb-5">

              <Answer type='user' tickets={JSON.parse(JSON.stringify(tickets))} />


            </div>

            <div className="w-1/2">
            </div>
          </div>


          <div className='w-full'>

            {

              !answerTicket ? (<div className="w-[98%] mr-5  m-auto h-[70px]   text-white bg-red-800 text-xl flex justify-center items-center font-bold">
                هنوز پاسخی داده نشده است
              </div>) : (
                <div className='flex'>
                  <div className='w-1/2'>

                  </div>
                  <div className="w-1/2  flex justify-end flex-col">
                    <div className="w-full h-[140px] rounded bg-gray-100  border-2 border-[#02693a]">
                      <div className="flex justify-between ">
                        <div className="w-1/2 flex pt-2">
                          <div className="w-[60px] mr-3 h-[60px] rounded-[50%] bg-[#02693a]">
                            <Image
                              width={60}
                              height={60}
                              className="rounded-[50%]"
                              src=""
                              alt="pic"
                            />
                          </div>
                          <div className="mr-3  flex flex-col justify-center ">
                            <p className="text-black">{answerTicket.user.name} </p>
                            <p className="text-black flex flex-col justify-center ">
                              {answerTicket.user.role}
                            </p>
                          </div>
                        </div>
                        <div className="w-1/2 flex justify-end  ">
                          <div className="w-[300px] h-[80px] text-black ml-20 justify-left items-center rounded-[10px] flex">
                            15/6/04<span className="mr-2">8:56 pm</span>
                          </div>
                        </div>
                      </div>

                      <div className="w-[95%] h-auto pt-2 pb-2 bg-[#02693a] rounded text-white m-auto flex pl-2 justify-right items-center  pr-2 ">
                        {answerTicket.body}
                      </div>
                    </div>
                  </div>
                </div>

              )}




          </div>

        </div>




      </UserPanelLayout>
    </>

  )
}

export default page
