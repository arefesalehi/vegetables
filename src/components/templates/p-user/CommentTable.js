'use client'
import { showswal } from '@/utils/helper'
import React from 'react'
import { FaRegStar } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'

const CommentTable = ({ comments }) => {
  const seeComment = (commentBody) => {
    showswal(commentBody, undefined, 'ok')
  }

  return (
    <>
      <div className="w-full mt-20  bg-gray-100 p-10 rounded-[10px]">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-md text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ردیف
                </th>
                {/* <th scope="col" className="px-6 py-3">
                  نام کاربر
                </th> */}
                <th scope="col" className="px-6 py-3">
                  تاریخ
                </th>
                <th scope="col" className="px-6 py-3">
                  نظرات
                </th>
                <th scope="col" className="px-6 py-3">
                  نام محصول
                </th>
                <th scope="col" className="px-6 py-3">
                  امتیاز
                </th>

                <th scope="col" className="px-6 py-3">
                  وضعیت
                </th>
              </tr>
            </thead>
            <tbody>
              {comments.map((comment, index) => {
                return (
                  <>
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {index + 1}
                      </th>
                      {/* <td className="px-6 py-4">
                        {comment.username}
                      </td> */}
                      <td className="px-6 py-4">
                        {new Date(comment.date).toLocaleDateString('fa-ir')}
                      </td>
                      <td className="px-6 py-4">
                        <button className='className="font-medium text-blue-600 dark:text-blue-500 hover:underline"' onClick={() => seeComment(comment.body)}>
                          مشاهده
                        </button>
                      </td>

                      <td>
                        {comment.productID.name}
                      </td>

                      <td className='flex justify-center mt-5'>
                        {new Array(5 - Number(comment.score))
                          .fill(0)
                          .map((item, index) => {
                            return <FaRegStar key={index} />
                          })}

                        {new Array(Number(comment.score))
                          .fill(0)
                          .map((item, index) => {
                            return <FaStar key={index} />
                          })}
                      </td>





                      <td className="px-6 py-4">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"> {comment.isAccept === true ? 'تایید شده':"در انتظار تایید"}</a>
                      </td>
                    </tr>

                  </>
                )
              })}


            </tbody>
          </table>
        </div>

      </div>
    </>
  )
}

export default CommentTable
