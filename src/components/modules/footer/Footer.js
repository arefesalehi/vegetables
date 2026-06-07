import Image from "next/image";
import React from "react";
import { TiLocation } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import { CgFacebook } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <div className="w-full md:h-[708px]  h-auto  bg-[#111013] text-[#807F80] text-xl">
        
        <div className="xl:w-[80%] lg:w-[90%] md:w-[98%] m-auto flex-col md:flex-row   flex pt-[36px] md:pt-[107px]">
          <div className="w-1/3 mt-[45px] sm:mt-[30px] md:mt-0 ">
            <ul className="pr-[35px] md:pr-0 mt-[40px] md:mt-0 ">
              <li className="pb-[40px]">
                <Image src="/images/light.png"  alt='pic' width={163} height={186} />
              </li>

              <li className="flex mb-5 ">
                <TiLocation className="text-[#01693A] ml-3" />
                <p>ایران،استان تهران،تهران</p>
              </li>

              <li className="flex">
                <MdEmail className="text-[#01693A] mr-[3px] md:mr-0 ml-3" />
                <p> arefesalehi@gmail.com</p>
              </li>
            </ul>

            <ul className="hidden md:flex flex-col">
              <li>
                <h1 className="text-2xl text-white mt-10 md:mt-20 mb-8">
                  ثبت سفارش و برگرداندن
                </h1>
              </li>
              <li className="mb-3">
                <p>کمک و مشاوره</p>
              </li>
              <li className="mb-3">
                <p>ارسال و برگرداندن</p>
              </li>
              <li className="mb-3">
                <p>قوانین و مقررات</p>
              </li>
              <li className="mb-3">
                <p>خط مشی بازگرداخت </p>
              </li>
            </ul>
          </div>
          <div className="w-1/3">
            <ul className="pr-[35px] md:pr-0 ">
              <li>
                <h1 className="text-2xl  w-[100px] md:w-[400px] lg:w-[300px] text-white pt-[10px] md:pt-[30px] mb-8">
                  {" "}
                  ساعات کاری{" "}
                </h1>
              </li>
              <li className="mb-3 w-[149px]  md:w-[400px] lg:w-[300px] ">
                <p> شنبه تا پنجشنبه: ساعت 8 صبح - 4 عصر</p>
              </li>
              <li className="mb-3  w-[149px]  md:w-[400px] lg:w-[300px]">
                <p> جمعه : 9صبح - 5 عصر</p>
              </li>
            </ul>

            <ul className="hidden md:flex flex-col">
              <li>
                <h1 className="text-2xl text-white md:mt-20 lg:mt-24 mt-14 mb-8"> حساب کاربری</h1>
              </li>
              <li className="mb-3">
                <p> ورود</p>
              </li>
              <li className="mb-3">
                <p>ثبت نام</p>
              </li>
              <li className="mb-3">
                <p>لیست علاقه مندی ها</p>
              </li>
              <li className="mb-3">
                <p>مقایسه </p>
              </li>
            </ul>

          </div>
          <div className=" w-[90%] px-2 lg:px-0 m-auto md:m-0 md:w-1/3">
            <ul>
              <li>
                <h1 className="text-2xl text-white pt-[30px] mb-8">
                  {" "}
                  موارد بیشتری دریافت کنید{" "}
                </h1>
              </li>
              <div className="flex">
                <span className="w-[50px] flex justify-center items-center hover:bg-[#026036] h-[50px] rounded-[50%] text-white ml-3  bg-black">
                  <CgFacebook />
                </span>
                <span className="w-[50px] flex justify-center items-center hover:bg-[#026036] h-[50px] rounded-[50%] text-white  ml-3 bg-black">
                  <FaTwitter />
                </span>
                <span className="w-[50px] flex justify-center items-center hover:bg-[#026036] h-[50px] rounded-[50%] text-white  ml-3 bg-black">
                  <FaPinterest />
                </span>
                <span className="w-[50px] flex justify-center items-center hover:bg-[#026036] h-[50px] rounded-[50%] text-white  ml-3 bg-black">
                  <RiInstagramFill />
                </span>
              </div>
            </ul>

            <ul>
              <li>
                <h1 className="text-2xl text-white mt-24 mb-8"> خبرنامه</h1>
              </li>
              <li className="mb-3">
                <p>
                  {" "}
                  برای دریافت پیشنهادات ویژه و اخبار انحصاری درباره محصولات
                  بوتانیکا در خبرنامه ثبت نام کنید
                </p>
              </li>
              <div className="xl:w-[410px] lg:w-[300px] md:w-[240px] flex hover:border hover:border-[#007A4B]  h-[50px] rounded-[30px] bg-black ">
                <input
                  type="text"
                  placeholder="ایمیل خود را وارد نمایید..."
                  className="bg-black w-[90%] border-none overflow-hidden outline-none md:w-[300px]  mr-8 mt-2"
                />
                <div className="w-[100px] hover:bg-[#7EC803] m-1 h-[43px] flex justify-center items-center text-white  bg-[#007A4B] rounded-[30px] ">
                  <MdEmail className="w-[20px] h-[20px] " />
                </div>
              </div>
            </ul>
          </div>
        </div>

        <div className="border-b-2 border-gray-700 w-full h-[100px]"></div>

        <div className="flex md:justify-between md:items-center pt-10 w-[90%] m-auto justify-center items-center flex-col sm:flex-col md:flex-row ">
        <span className="mb-[20px] md:mb-0">
            <p>کپی رایت © 1403 <a href="" className="hover:text-[#01693A]" >قالب بوتونیکا</a>. تمامی حقوق محفوظ است.</p>
          </span>

          <span className="mb-[20px] md:mb-0">
          <div className="flex">
                <span className="w-[50px] flex justify-center items-center hover:bg-[#026036] h-[50px] rounded-[50%] text-white ml-3  bg-black">
                  <CgFacebook />
                </span>
                <span className="w-[50px] flex justify-center items-center hover:bg-[#026036] h-[50px] rounded-[50%] text-white  ml-3 bg-black">
                  <FaTwitter />
                </span>
                <span className="w-[50px] flex justify-center items-center hover:bg-[#026036] h-[50px] rounded-[50%] text-white  ml-3 bg-black">
                  <FaPinterest />
                </span>
                <span className="w-[50px] flex justify-center items-center hover:bg-[#026036] h-[50px] rounded-[50%] text-white  ml-3 bg-black">
                  <RiInstagramFill />
                </span>
              </div>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
