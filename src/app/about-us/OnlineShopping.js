import Image from "next/image"

const OnlineShopping = () => {
  return (
    <>
       <div className="w-full mt-20 mb-0 md:mt-40 md:mb-40 flex flex-col md:flex-row h-auto  items-center border-t-2 ">
       <span className="basis-1/2">
          <Image
          alt='pic'
            src="/images/shopping-cart-loader.gif"
            width={913}
            height={361}
          />
        </span>
        <span className=" basis-full md:basis-1/2">
          <h1 className='font-bold text-3xl mb-10'> خرید اینترنتی مطمئن و ایمن
          </h1>
          <p className='text-justify pl-10'>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است. و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.


          </p>
        </span>
    
      </div>


    </>
  )
}

export default OnlineShopping