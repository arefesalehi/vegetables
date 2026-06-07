import { showswal } from '@/utils/helper'
import { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'


const CommentForm = ({productID}) => {
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [body, setBody] = useState()
  const [score, setScore] = useState()
  const [isSaveUser, setIsSaveUser]= useState(false)

  useEffect(()=>{
   const userInfo= JSON.parse(localStorage.getItem('userInfo'))
   setUsername(userInfo?.username)
   setEmail(userInfo?.email)
  },[])

  const setCommentScore=(score)=>{
    setScore(score)
    showswal('امتیاز شما با موفقیت ثبت شد', "success","ادامه ثبت کامنت" )

  }

  const submitComment = async () => {

    if(isSaveUser){
      const userInfo={
        username, email
      }
      localStorage.setItem('userInfo',JSON.stringify(userInfo))
    }

    const newComment = {
      username,
      email,
      body,
      score,
      productID,
    }
    const res = await fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newComment),
    })

    const data = await res.json()
    console.log('data==>', data)

    if (res.status === 201) {
      showswal('کامنت با موفقیت ثبت شد', 'success', 'باشه')
    }
  }

  return (
    <>
      <div className="w-full text-xl mt-20">
        <strong>دیدگاه خود را بنویسید</strong>
        <p className="text-gray-400 mt-5 mb-5">
          نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند
          *
        </p>

        <p className="flex mb-2">
          <strong>امتیاز شما *:</strong>
          <FaStar
            className="hover:text-yellow-500  text-gray-500 "
            onClick={() => setCommentScore(5)}
          />
          <FaStar
            className="hover:text-yellow-500  text-gray-500"
            onClick={() => setCommentScore(4)}
          />
          <FaStar
            className="hover:text-yellow-500 text-gray-500"
            onClick={() => setCommentScore(3)}
          />
          <FaStar
            className="hover:text-yellow-500 text-gray-500"
            onClick={() => setCommentScore(2)}
          />
          <FaStar
            className="hover:text-yellow-500 text-gray-500"
            onClick={() => setCommentScore(1)}
          />
        </p>
        <strong className="mb-2">دیدگاه شما * :</strong>

        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full    h-[100px] mt-3 rounded-[5px] border border-gray-400 pr-2 pt-2 outline-none"
        ></textarea>
        <div className="mb-5">
          <label>
            <strong className="mt-2 mb-2">نام *:</strong>
          </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="w-full  pr-3 h-[53px] rounded-[5px]  outline-none border border-gray-400"
          />
        </div>

        <div className="mb-3">
          <label>
            <strong className="mt-2 mb-2">ایمیل *:</strong>
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="w-full  pr-3 h-[53px] rounded-[5px]  outline-none border border-gray-400"
          />
        </div>

        <div className="flex mt-5 mb-5">
          <input type="checkbox"  value={isSaveUser} onChange={(e)=>setIsSaveUser((prev)=>!prev)} />
          <p className="mr-2">
            ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره دیدگاهی
            می‌نویسم.
          </p>
        </div>

        <button
          onClick={submitComment}
          type="submit"
          className="bg-[#02693a] text-white h-[50px] rounded-[5px] pt-2 w-full pb-2 pr-3 pl-3 mb-3"
        >
          ثبت
        </button>
      </div>
    </>
  )
}

export default CommentForm
