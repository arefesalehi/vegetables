import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Sms from '../sms/Sms'
import { showswal } from '@/utils/helper'
import { validateEmail, validatePassword, validatePhone } from '@/utils/auth'
import { redirect, useRouter } from 'next/navigation'

const Login = ({ showRegisterForm }) => {
  const [isLoginWithOtp, setIsLoginWithOtp] = useState(false)
  const [identifier, setIdentifier] = useState()
  const [password, setPassword] = useState()
  const [phone, setPhone] = useState('')

  const router = useRouter()


  const hideOtpForm = () => {
    setIsLoginWithOtp(false)
  }

  const signin = async () => {

    if (!identifier) {
      return showswal(
        'لطفا ایمیل یا شماره همراه را وارد نمایید',
        'error',
        'تلاش مجدد',
      )
    }

    if (!password) {
      return showswal(
        'لطفا رمزعبور را وارد نمایید',
        'error',
        'تلاش مجدد',
      )
    }

    const isValidIdentifier = validateEmail(identifier)
    if (!isValidIdentifier) {
      return showswal(
        'ایمیل یا شماره تلفن معتبر نمی باشد',
        'error',
        'تلاش مجدد',
      )
    }

    const isValidPassword = validatePassword(password)
    if (!isValidPassword) {
      return showswal('رمز عبور معتبر نمی باشد', 'error', 'تلاش مجدد')
    }

    const newUser = {
      email: identifier,
      password,
    }

    const res = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })

    const data = await res.json()
    console.log('data=>', data)

    if (res.status === 200) {
      swal({
        title:'شما با موفقیت وارد شدید',
        icon:'success',
        buttons:'ورود به پنل کاربری'
      })
      // .then(()=> window.location.href = '/p-user' )
      .then(()=>location.replace('/p-user'))


    } else if (res.status === 419) {
      return showswal('ایمیل یا رمز عبور معتبر نمی باشد', 'error', 'تلاش مجدد')
    } else if (res.status === 422 || res.status === 401) {
      return showswal('کاربری با این مشخصات یافت نشد', 'error', 'تلاش مجدد')
    }
  }

    
  const sendOtp = async () => {

  const isValidatephone = validatePhone(identifier)
  if (!isValidatephone) {
    return showswal('شماره تلفن وارد شده معتبر نمی باشد', 'error', 'تلاش مجدد')
  }

  const res = await fetch('/api/auth/sms/loginsend', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ phone: identifier }),
  })

  if (res.status === 201) {
    swal({
      title: 'کد با موفقیت پیامک شد',
      icon: 'success',
      buttons: 'ok',
    }).then(() => {
       setPhone(identifier)
      setIsLoginWithOtp(true)
    })
  }
}

  return (
    <>
      {!isLoginWithOtp ? (
        <div className="w-full flex">
          <span className=" w-full lg:w-1/2 flex justify-center items-center ">
            <div className="xl:w-[65%] lg:w-[85%] w-[90%] mt-80  m-auto  h-auto bg-white shadow-2xl pb-10">
              <div className="flex flex-col ">
                <p className="flex justify-center items-center text-2xl mb-5 mt-10 text-[#00a551] font-bold">
                  فرم ورود
                </p>
                <label className="w-[80%] m-auto text-[#919193]  text-xl font-bold ">
                  ایمیل / شماره موبایل: <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="ایمیل/شماره همراه"
                  className="w-[80%] bg-[#f4f4f4] border-[#2cb571]   m-auto rounded-[10px] h-[45px] mt-1 mb-5"
                />

                <label className="w-[80%] text-[#919193] m-auto text-xl font-bold ">
                  رمز عبور: <span className="text-red-700">*</span>
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="رمز عبور"
                  className="w-[80%] bg-[#f4f4f4]  border-[#2cb571]   m-auto rounded-[10px] h-[45px] mt-1 mb-5"
                />

                <button
                  onClick={sendOtp}
                  className="w-[80%] m-auto h-[45px] bg-[#00a551] text-white mt-5 rounded-[10px]"
                >
                  ثبت نام با کد یک بار مصرف
                </button>

                <button
                  onClick={signin}
                  className="w-[80%] m-auto h-[45px] bg-[#00a551] text-white mt-5 rounded-[10px]"
                >
                  ورود
                </button>

                <Link
                  href={'/forget-password'}
                  className="flex justify-center items-center  mt-10"
                >
                  رمز عبور را فراموش کرده اید؟
                </Link>
                <p className="flex justify-center items-center  mt-5">
                  {' '}
                  حساب کاربری ندارید؟
           
                  <span className="text-[#2cb571]" onClick={showRegisterForm}>
                    {' '}
                    ورود به صفحه ثبت نام
                  </span>
                </p>
                {/* <p className="flex justify-center items-center mt-5">لغو</p> */}
              </div>
            </div>
          </span>

          <span className="lg:w-1/2 hidden md:block h-full  ">
            <Image
              src="/images/banner-blog1.jpg"
              className="w-full  mt-36 h-[700px]"
              width={500}
              height={800}
              alt="pic"
            />
          </span>

        </div>
      ) : (
        <Sms hideOtpForm={hideOtpForm} phone={phone} />
      )}
    </>
  )
}

export default Login
