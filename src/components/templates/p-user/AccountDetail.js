'use client'
import { useState } from "react"

const AccountDetail = ({user}) => {
  const [name, setName]=useState(user.name)
  const[phone, setPhone]=useState(user.phone)
  const[email, setEmail]=useState(user.email)
  const[password, setPassword]=useState(user.password)

  const updateUser=async()=>{

    const res = await fetch('/api/users',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({name, phone, email, password})
    })

    if(res.status === 200){
      swal({
        title:'اطلاعات با موفقیت اپدیت شد',
        icon:'success',
        buttons:'ok'
      }).then(async(result)=>{
         await fetch('/api/auth/signout',{method:'POST'})
        location.replace('/login-register')
        
      })
    }

  }


  return (
    <>
      <div className="w-full flex ">
        <div className="w-1/2 m-2">
          <div className="mb-5">
            <label>
              <strong className="mt-2 mb-2">نام :</strong>
            </label>
            <input
            value={name}
            onChange={(e)=>setName(e.target.value)}
              type="text"
              className="w-full mt-5  pr-3 h-[53px] rounded-[5px]  outline-none border border-gray-400"
            />
          </div>
        </div>
        <div className="w-1/2 m-2">
          <div className="mb-3">
            <label>
              <strong className="mt-2 mb-2">ایمیل  :</strong>
            </label>
            <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
              type="email"
              className="w-full  mt-5  pr-3 h-[53px] rounded-[5px]  outline-none border border-gray-400"
            />
          </div>
        </div>
      </div>

      <div className="mb-3">
        <label>
          <strong className="mt-2 mb-2"> تلفن  :</strong>
        </label>
        <input
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
          type="text"
          className="w-full  mt-5   pr-3 h-[53px] rounded-[5px]  outline-none border border-gray-400"
        />
        <p>
          به این ترتیب نام شما در بخش حساب کاربری و نقد و بررسی ها نمایش داده می
          شود
        </p>
      </div>

      <h1 className="text-3xl font-bold mt-20 mb-10">تغییر کلمه عبور</h1>

      <div className="mb-3">
        <label>
          <strong className="mt-2 mb-2">
            {' '}
            کلمه عبور پیشین (در صورتی که قصد تغییر ندارید خالی بگذارید) :
          </strong>
        </label>
        <input
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
          type="text"
          className="w-full  mt-5   pr-3 h-[53px] rounded-[5px]  outline-none border border-gray-400"
        />
      </div>

      <div className="mb-3">
        <label>
          <strong className="mt-2 mb-2">
            {' '}
            کلمه عبور جدید (در صورتی که قصد تغییر ندارید خالی بگذارید) :
          </strong>
        </label>
        <input
          type="text"
          className="w-full   mt-5  pr-3 h-[53px] rounded-[5px]  outline-none border border-gray-400"
        />
      </div>

      <div className="mb-3">
        <label>
          <strong className="mt-2 mb-2"> تکرار کلمه عبور :</strong>
        </label>
        <input
          type="text"
          className="w-full  mt-5   pr-3 h-[53px] rounded-[5px]  outline-none border border-gray-400"
        />

        <button
        onClick={updateUser}
          type="submit"
          className="bg-[#02693a] text-white h-[50px] rounded-[5px] mt-10 pt-2 w- pb-2 pr-3 pl-3 mb-3"
        >
          ذخیره تغییرات
        </button>
      </div>
    </>
  )
}

export default AccountDetail
