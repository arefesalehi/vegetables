import Image from "next/image";
import React from "react";

const Promote2 = () => {
  return (
    <>
      <div data-aos="fade-up"  data-aos-duration="500"  className=" xl:w-[80%] w-[95%]  m-auto flex   ">
        <div className="w-[100%]   flex flex-row  justify-center items-center h-[370px] rounded-[20px] mb-20 bg-[#f3f3f3] mt-20 ">
          <div className="w-full md:w-2/3  flex  ">
            <Image
              src="/images/Capture110.PNG"
              width={800}
              height={370}
              alt="pic"
              className="h-auto max-w-full xl:h-[370px] xl:mr-[2%] overflow-hidden m:w-[800px] w-[1200px]"
            />
          </div>
          <div className="w-full lg:w-1/3 hidden lg:flex  justify-center items-center flex-col">
            <h1 className="text-5xl text-green-700 ">در دسترس</h1>
            <p className="p-5 text-xl">
              از غذاهایی که از سبزیجات عجیب و غریب تشکیل شده اند پذیرایی کنید و
              طعم عجیب و غریب این سبزیجات را گرامی بدارید.
            </p>


            <button>اطلاعات بیشتر</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Promote2;
