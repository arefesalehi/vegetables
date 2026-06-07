'use client'
import { useRouter } from "next/navigation"
import swal from "sweetalert"
const OffTable = ({discounts}) => {
    const router = useRouter()

    const removeOff=(discountID)=>{
     swal({
        title:'ایا از حذف اطمینان دارید؟',
        icon:'success',
        buttons:["خیر","بله"]
     }).then(async(result)=>{
       if(result){
        const res = await fetch('/api/discount',{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({id:discountID})
        })
        if(res.status === 200){
            swal({
                title:'کد تخفیف با موفقیت حذف شد',
                icon:'success',
                buttons:"ok"
                
            }).then(()=>{
                router.refresh()
            })
        }
       }
     })

    }



  return (
    <div className='mycontainer'>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg  mt-10 ">
        <table className="w-full text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-xl bg-green-400 text-white">
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />{' '}
                  <label for="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
               شناسه
              </th>
              <th scope="col" className="px-6 py-3">
                کد 
              </th>
              <th scope="col" className="px-6 py-3">
                درصد
              </th>
              <th scope="col" className="px-6 py-3">
                حداکثر استفاده
              </th>
              <th scope="col" className="px-6 py-3">
               دفعات استفاده شده
              </th>
              <th scope="col" className="px-6 py-3">
                حذف
              </th>
            
            </tr>
          </thead>
          <tbody>

            {
                discounts.map((discount, index)=>{
                    return (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="w-4 p-4">
                          <div className="flex items-center">
                            <input
                              id="checkbox-table-search-1"
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />{' '}
                            <label for="checkbox-table-search-1" className="sr-only">
                              checkbox
                            </label>
                          </div>
                        </td>
                        <th
                          scope="row"
                          className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                        >
                        {index+1}
                        
                        </th>
                        <td className="px-6 py-4">{discount.code}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                      
                           {discount.percent}%
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <a
                            href="#"
                            className="font-medium text-black-600 dark:text-blue-500"
                          >
                          {discount.maxUse}
                          </a>
                        </td>
                        <td className="px-6 py-4">
                          <a
                            href="#"
                            className="font-medium text-black-600 dark:text-blue-500 "
                          >
                           {discount.uses}
                          </a>
                        </td>
                        <td className="px-6 py-4">
                          <a
                          onClick={()=>removeOff(discount._id)}
                   
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            حذف
                          </a>
                        </td>
          
                       
                      </tr>
                    )
                })
            }

          
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OffTable
