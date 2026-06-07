'use client'
import { showswal } from '@/utils/helper'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'
import swal from 'sweetalert'


const CommentTable = ({ comments }) => {
  const router = useRouter()

  const showComment = (body) => {
    showswal(body, undefined, 'ok')
  }

  const deleteComment = (commentID) => {
    swal({
      title: 'ایا از حذف اطمینان دارید؟',
      icon: 'warning',
      buttons: ['خیر', 'بله'],
    }).then(async (result) => {
      if (result) {
        const res = await fetch(`/api/comments/${commentID}`, {
          method: 'DELETE',
          // headers: {
          //   'Content-Type': 'application/json',
          // },
          // body: JSON.stringify({ id: commentID }),
        })

        if (res.status===200){
          swal({
            title:'کامنت با موفقیت حذف شد',
            icon:'success',
            buttons:'ok'
          }).then(()=>{
            router.refresh()
          })
        }
      }
    })
  }


  const acceptComment=async(commentID)=>{
      const res = await fetch('/api/comments/accept',{
        method:'PUT',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({id:commentID})
      })

      if (res.status===200){
        swal({
          title:'کامنت با موفقیت تایید شد',
          icon:'success',
          buttons:'ok'
        }).then(()=>{
          router.refresh()
        })
      }
  }

  
  const rejectComment=async(commentID)=>{
    const res = await fetch('/api/comments/reject',{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({id:commentID})
    })

    if (res.status===200){
      swal({
        title:'کامنت با موفقیت رد شد',
        icon:'success',
        buttons:'ok'
      }).then(()=>{
        router.refresh()
      })
    }
}



  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg  mt-10 ">
        <table className="w-full text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-xl bg-green-400 text-white" >
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  {/* <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />{' '}
                  <label for="checkbox-all-search" className="sr-only">
                    checkbox
                  </label> */}
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                شناسه
              </th>
              <th scope="col" className="px-6 py-3">
                نام و نام خانوادگی
              </th>

              <th scope="col" className="px-6 py-3">
                امتیاز
              </th>
              <th scope="col" className="px-6 py-3">
                محصول
              </th>
              <th scope="col" className="px-6 py-3">
                تاریخ ثبت
              </th>
              <th scope="col" className="px-6 py-3">
                مشاهده
              </th>
              <th scope="col" className="px-6 py-3">
                ویرایش
              </th>
              <th scope="col" className="px-6 py-3">
                حذف
              </th>
              <th scope="col" className="px-6 py-3">
                تایید /رد
              </th>
              <th scope="col" className="px-6 py-3">
                پاسخ
              </th>
              <th scope="col" className="px-6 py-3">
                بن
              </th>
            </tr>
          </thead>
          <tbody>
            {comments.map((comment, index) => {
              return (
             
                    <tr key={comment._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      {/* <input
                       
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />{' '}
                      <label for="checkbox-table-search-1" className="sr-only">
                        checkbox
                      </label> */}
                    </div>
                  </td>

                  <td className="px-6 py-4">{index + 1}

                  </td>
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {/* <img
                      className="w-10 h-10 rounded-full"
                      src='/'
                      alt="Jese image"
                    />{' '} */}
                    <div className="ps-3">
                      <div className="text-base font-semibold">
                        {comment.username}
                      </div>
                      <div className="font-normal text-gray-500">
                        {comment.email}
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      {/* <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{' '} */}
                      {new Array(comment.score).fill(0).map((item, index) => {
                        return <FaStar key={index} />
                      })}
                      {new Array(5 - comment.score)
                        .fill(0)
                        .map((item, index) => {
                          return <FaRegStar key={index} />
                        })}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div
                    
                      className="font-medium text-black-600 dark:text-blue-500 "
                    >
                      {comment?.productID?.name}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      href=""
                      className="font-medium text-black-600 dark:text-blue-500 "
                    >
                      {new Date(comment.date).toLocaleDateString('fa-ir')}
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => showComment(comment.body)}
                      href=""
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      مشاهده
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      href=""
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      ویرایش{' '}
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      onClick={() => deleteComment(comment._id)}
                      href=""
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      حذف
                    </Link>
                  </td>

                  <td className="px-6 py-4">
                  

                    {comment.isAccept === true ? ( <Link
                      onClick={()=>rejectComment(comment._id)}
                      href=""
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                     رد
                    </Link>) : ( 
                      <Link
                    onClick={()=>acceptComment(comment._id)}
                      href=""
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                     تایید
                    </Link>) }

                 
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      href=""
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      پاسخ
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      href=""
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      بن
                    </Link>
                  </td>
                  </tr>
             
            
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default CommentTable
