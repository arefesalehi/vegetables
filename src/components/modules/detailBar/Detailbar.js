import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import { ImTruck } from "react-icons/im";

const Detailbar = () => {


  
  return (
    <>
      <div className="w-full md:h-[45px] h-[65px] bg-[#D0FFBD] flex justify-start pr-20 items-center">
        <div className=" w-full flex justify-between items-center">

          <div className="w-1/2 flex  items-center">
            <div className="flex ml-5  ">
              <FaPhoneVolume className="text-[#01693A]  ml-3" />
              <p>09355789137</p>
            </div>

            <div className="flex ">
              <MdEmail className="text-[#01693A]  ml-3" />
              <p>arefesalehi@gmail.com</p>
            </div>
          </div>


          <div className="w-1/2  sm:flex  justify-end  items-center pl-20 hidden ">
            <div className="flex   ml-10">
              <TiLocation className="text-[#01693A] ml-3" />
              <p>ایران،استان تهران،تهران</p>
            </div>

            <div className="flex  ">
              <ImTruck className="text-[#01693A]  ml-3" />
              <p>ارسال رایگان برای سفارش بالای 700 تومان</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Detailbar;
