'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { IoIosSend } from 'react-icons/io'
import swal from 'sweetalert'
const SendTicket = () => {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState(1)
  const [body, setBody] = useState('')
  const [departments, setDepartments] = useState([])
  const [subDepartments, setSubDepartments] = useState([])
  const [departmentID, setDepartmentID] = useState(-1)
  const [subDepartmentID, setSubDepartmentID] = useState(-1)

  useEffect(() => {
    const getDepartment = async () => {
      const res = await fetch('/api/departments', {
        method: 'GET',
      })
      console.log('resssss=>', res)

      const data = await res.json()
      setDepartments([...data])
    }
    getDepartment()
  }, [])

  useEffect(() => {
    const getSubDepartments = async () => {
      const res = await fetch(`/api/departments/sub/${departmentID}`)
      if (res.status === 200) {
        const data = await res.json()
        setSubDepartments([...data])
      }
    }
    getSubDepartments()
  }, [departmentID])

  const sendTicket = async () => {
    // Validation (You)

    const ticket = {
      title,
      body,
      department: departmentID,
      subDepartment: subDepartmentID,
      priority,
    };

    const res = await fetch("/api/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ticket),
    });
    console.log('resssss=>',res);
    const data = await res.json()
    console.log('dataaaa=>',data.message.errors);
    
    

    if (res.status === 201) {
      swal({
        title: "تیکت شما با موفقیت ثبت شد",
        icon: "success",
        buttons: "مشاهده تیکت‌ها",
      }).then(() => {
        router.replace("/p-user/tickets");
      });
    }
  };

  return (
    <>
      <div className="flex w-full mt-10 mr-10 ml-10 mb-3">
        <div className="w-1/2">
          <label htmlFor="" className="font-bold">
            دپارتمان را انتخاب نمایید :
          </label>

          <select
            onChange={(e) => setDepartmentID(e.target.value)}
            className="w-[90%] mt-3 mb-3 text-sm md:text-base rounded border-[#02693a] border-solid   m-auto h-[40px] border-2"
          >
            <option value={-1}>یک مورد را انتخاب نمایید</option>
            {departments.map((department) => {
              return (
                <option key={department._id} value={department._id}>
                  {department.title}
                </option>
              )
            })}
          </select>
        </div>

        <div className="w-1/2">
          <label htmlFor="" className="font-bold">
            نوع تیکت را انتخاب نمایید:
          </label>

          <select
            onChange={(e) => setSubDepartmentID(e.target.value)}
            className="w-[90%] text-sm md:text-base mt-3 mb-3 rounded border-[#02693a] border-solid m-auto h-[40px] border-2"
          >
            <option defaultValue={-1}>یک مورد را انتخاب نمایید</option>
            {subDepartments.map((subdepartment) => {
              return (
                <option value={subdepartment._id} key={subdepartment._id}>
                  {subdepartment.title}
                </option>
              )
            })}
          </select>
        </div>
      </div>

      <div className="flex w-full  mt-3 mr-10 ml-10 mb-3">
        <div className="w-1/2">
          <label htmlFor="" className="font-bold">
            {' '}
            عنوان تیکت را وارد نمایید:
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-[90%] mt-3  rounded border-[#02693a]  m-auto h-[40px] border-2"
          />
        </div>

        <div className="w-1/2">
          <label htmlFor="" className="font-bold">
            سطح اولویت تیکت   :
          </label>

          <select
            onChange={(e) => setPriority(e.target.value)}
            className="w-[90%] text-sm md:text-base mt-3 mb-3 border-solid rounded border-[#02693a]  m-auto h-[40px] border-2"
          >
            <option defaultValue={-1}>یک مورد را انتخاب نمایید</option>
            <option value={1}>کم</option>
            <option value={2}>متوسط</option>
            <option value={3}>زیاد</option>
          </select>
        </div>
      </div>

      <div className=" w-full mt-3 mr-10 ml-10 mb-3">
        <label htmlFor="" className="font-bold">
          محتوای تیکت را وارد نمایید:
        </label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-[95%]   h-[200px] mt-3  rounded border-[#02693a]  border-2 "
        />
      </div>

      <div className="w-[95%] mt-3 mr-10 ml-10 mb-3 bg-green-100 h-[120px] flex flex-col justify-center items-center rounded  ">
        <div className="flex flex-col justify-center items-center ">
          <p>حداکثر اندازه :6 مگابایت</p>
          <p>فرمت های مجاز: jpg,jpeg, png,jpeg, rar, zip</p>
          <input type="file" />
        </div>
      </div>

      <button
        onClick={sendTicket}
        className="flex justify-center items-center p-2 bg-[#02693a] text-white rounded mr-10"
      >
        <IoIosSend />
        <p className="mr-1">ارسال تیکت</p>
      </button>
    </>
  )
}

export default SendTicket
