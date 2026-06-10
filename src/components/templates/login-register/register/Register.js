
import { Label } from 'flowbite-react'
import Image from 'next/image'
import React from 'react'
import Sms from '../sms/Sms'
import { useState } from 'react'
import { showswal } from '@/utils/helper'
import { validateEmail, validatePassword, validatePhone } from '@/utils/auth'
import swal from 'sweetalert'


const Register = ({ showLoginForm }) => {
  const [isRegisterWithOtp, setIsRegisterWithOtp] = useState(false)
  const [isRegisterWithPass, setIsRegisterWithPass] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const hideOtpForm = () => {
    setIsRegisterWithOtp(false)
  }

  const signup = async() => {

    if (!name.trim()) {
      return showswal('لطفا نام خود را وارد نمایید', 'error', 'تلاش مجدد')
    }

    const isValidPhone = validatePhone(phone)
    if (!isValidPhone) {
      return showswal('شماره تلفن معتبر نمی باشد', 'error', 'تلاش مجدد')
    }


   const isValidEmail = validateEmail(email)
      if (!isValidEmail) {
        return showswal('ایمیل وارد شده معتبر نمی باشد', 'error', 'تلاش مجدد')
      }

   
    const isValidPassword = validatePassword(password)
    if (!isValidPassword) {
      return showswal('رمز عبور وارد شده قابل حدس است', 'error', 'تلاش مجدد')
    }

    const newuser = {
      name,
      email,
      password,
      phone,
    }

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newuser),
    })

    if (res.status === 201) {      
      swal({
        title: 'ثبت نام با موفقیت انجام شد',
        icon:'success',
        buttons: 'ورود به صفحه لاگین ',
      }).then(()=> window.location.href = '/login-register')
    } else if (res.status === 422) {
       showswal(
        'کابری با این اطلاعات از قبل وجود دارد',
        'error',
        'تلاش مجدد',
      )
    }
  }

  

  const sendOtp=async()=>{

    const isValidatephone = validatePhone(phone)
    if(!isValidatephone ){
      showswal('شماره تلفن وارد شده معتبر نمی باشد','error','تلاش مجدد')
    }

    const res = await fetch('/api/auth/sms/send',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({phone})
    })

    if (res.status === 201){
      swal({
        title:'کد با موفقیت پیامک شد',
        icon:'success',
        buttons:'ok'
      }).then(()=>{
        setIsRegisterWithOtp(true)
      })
    }else if(res.status===422){
        swal({
        title:'شما قبلا با این شماره تلفن ثبت نام کردید',
        icon:'error',
        buttons:'لاگین'
      }).then(()=>{
        showLoginForm()
      })
    }

  }

  

  return (
    <>
      {!isRegisterWithOtp ? (
        <div className="w-full flex">
          <span className="w-full lg:w-1/2   flex justify-center items-center ">
            <div className="xl:w-[65%] lg:w-[85%]  w-[90%] mt-80  m-auto  h-auto bg-white shadow-2xl pb-10">
              <div className="flex flex-col ">
                <p className="flex justify-center items-center text-2xl mt-10 text-[#00a551] font-bold">
                  فرم ثبت نام
                </p>
                <Label className="w-[80%] m-auto text-[#919193]  text-xl font-bold ">
                  نام: <span className="text-red-700">*</span>
                </Label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="نام"
                  className="w-[80%] bg-[#f4f4f4] border-[#2cb571]   m-auto rounded-[10px] h-[45px] mt-1 mb-5"
                />

                <Label className="w-[80%] text-[#919193] m-auto text-xl font-bold ">
                  شماره موبایل: <span className="text-red-700">*</span>
                </Label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  placeholder="شماره موبایل  "
                  className="w-[80%] bg-[#f4f4f4] border-[#2cb571]   m-auto rounded-[10px] h-[45px] mt-1 mb-5"
                />
                <Label className="w-[80%] text-[#919193] m-auto text-xl font-bold ">
                  ایمیل: <span className="text-red-700">*</span>
                </Label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  placeholder="ایمیل (دلخواه)"
                  className="w-[80%]  bg-[#f4f4f4] border-[#2cb571]  m-auto rounded-[10px] h-[45px] mt-1 mb-5"
                />

                {isRegisterWithPass && (
                  <>
                    <Label className="w-[80%] text-[#919193] m-auto text-xl font-bold ">
                      رمز عبور: <span className="text-red-700">*</span>
                    </Label>
                        <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="رمز عبور"
                  className="w-[80%]  bg-[#f4f4f4] border-[#2cb571]  m-auto rounded-[10px] h-[45px] mt-1 mb-5"
                />
                    
                  </>
                )}

                <button
                 onClick={sendOtp}
                
                  className="w-[80%] m-auto h-[45px] bg-[#00a551] text-white mt-5 rounded-[10px]"
                >
                  ثبت نام با کد تایید
                </button>

                <button
                  onClick={() => {
                    if (isRegisterWithPass) {
                      signup()
                    } else {
                      setIsRegisterWithPass(true)
                    }
                  }}
                  className="w-[80%] m-auto h-[45px] bg-[#00a551] text-white mt-5 rounded-[10px]"
                >
                  ثبت نام با رمزعبور
                </button>
                <p className="flex justify-center items-center  mt-10">
                  {' '}
                  قبلا ثبت نام کرده اید ؟
                  <span className="text-[#2cb571]" onClick={showLoginForm}>
                    {' '}
                    ورود به صفحه لاگین
                  </span>
                </p>
                {/* <p  onClick={hideOtpForm}   className="flex justify-center items-center mt-5">لغو</p> */}
              </div>
            </div>
          </span>

          <span className="lg:w-1/2  hidden md:block h-full  ">
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
        <Sms hideOtpForm={hideOtpForm}  phone={phone} />
      )}
    </>
  )
}

export default Register
