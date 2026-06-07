import Image from "next/image";
import React from "react";

const DeliveryBox = ({img, desc, title}) => {
  return (
    <>
      <div className="lg:w-[400px]  md:w-full  m-auto flex  justify-center items-center h-[180px] mb-20 border-2 border-dotted border-gray-400  rounded-[10px]  ">
        <span className="w-[80px] h-[80px] p-3 flex justify-center items-center">
          <img src={img}   alt='pic' />
        </span>
        <span className="">
          <h1 className="text-xl  font-bold">{title} </h1>
          <p className="mt-3 p-2 text-xl text-[#afafaf] ">
            {desc}
          </p>
        </span>
      </div>
    </>
  );
};

export default DeliveryBox;
