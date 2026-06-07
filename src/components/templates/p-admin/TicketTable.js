'use client'

import { showswal } from '@/utils/helper'
import { useRouter } from 'next/navigation'

import React from 'react'
import swal from 'sweetalert'
const TicketTable = ({ tickets }) => {
    const router = useRouter()

    const seeTicket = async (body) => {
        showswal(body, undefined, 'ok')

    }

    const removeTicket = (ticketid) => {
        swal({
            title: 'ایا از حذف اطمینان دارید ؟',
            icon: 'warning',
            buttons: ["خیر", "بله"]
        }).then(async (result) => {
            if (result) {
                const res = await fetch('/api/tickets', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ id: ticketid })
                })

                if (res.status === 200) {
                    swal({
                        title: 'تیکت با موفقیت حذف گردید',
                        icon: 'success',
                        buttons: 'ok'
                    }).then(() => {
                        router.refresh()
                    })
                }
            }
        })

    }


     const answerToTicket = async (ticket) => {
    swal({
      title: "لطفا پاسخ مورد نظر را وارد کنید:",
      content: "input",
      buttons: "ثبت پاسخ",
    }).then(async (answerText) => {
      if (answerText) {
        const answer = {
          ...ticket,
          body: answerText,
          ticketID: ticket._id,
        };

        const res = await fetch("/api/tickets/answer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(answer),
        });

        if (res.status === 201) {
          swal({
            title: "پاسخ مورد نظر ثبت شد",
            icon: "success",
            buttons: "فهمیدم",
          })
        }
      }
    });
  };

    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg  mt-10 ">
                <table className="w-full text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="text-xl bg-green-400 text-white">
                            <th scope="col" className="p-4">
                                {/* <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />{' '}
                  <label for="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div> */}
                            </th>
                            <th scope="col" className="px-6 py-3">
                                کاربر
                            </th>
                            <th scope="col" className="px-6 py-3">
                                عنوان
                            </th>
                            <th scope="col" className="px-6 py-3">
                                دپارتمان
                            </th>
                            <th scope="col" className="px-6 py-3">
                                مشاهده
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
                        {tickets.map((ticket) => {
                            return (
                                <tr
                                    key={ticket._id}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                >
                                    <td className="w-4 p-4">
                                        {/* <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />{' '}
                      <label for="checkbox-table-search-1" className="sr-only">
                        checkbox
                      </label>
                    </div> */}
                                    </td>
                                    <th
                                        scope="row"
                                        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        <img
                                            className="w-10 h-10 rounded-full"
                                            src='/images/author-14_70x70-96x96.jpg'
                                            alt="Jese image"
                                        />{' '}
                                        <div className="ps-3">
                                            <div className="text-base font-semibold">{ticket.user.name}</div>
                                            {/* <div className="font-normal text-gray-500">
                        {ticket.department.title}
                      </div> */}
                                        </div>
                                    </th>
                                    <td className="px-6 py-4">
                                        {ticket.title}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{' '}
                                            {ticket.department.title}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <a
                                            onClick={() => seeTicket(ticket.body)}
                                            href="#"
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            مشاهده
                                        </a>
                                    </td>
                                    {/* <td className="px-6 py-4">
                                        <a
                                            onClick={() => removeTicket(ticket._id)}
                                            href="#"
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            حذف
                                        </a>
                                    </td> */}
                                    <td className="px-6 py-4">
                                        <a
                                            onClick={() => answerToTicket(ticket)}
                                            href="#"
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            پاسخ
                                        </a>
                                    </td>

                                    <td className="px-6 py-4">
                                        <a

                                            href="#"
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            بن
                                        </a>
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

export default TicketTable