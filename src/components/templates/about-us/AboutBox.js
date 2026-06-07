import { FaQuoteRight } from 'react-icons/fa'
import Image from 'next/image'
const AboutBox = ({title , desc}) => {
  return (
    <>
      <div className="w-full h-auto text-justify mt-10 bg-[#f1f1f1] flex flex-col md:flex-row items-center justify-center   p-20 rounded-[20px]">
          <span className="basis-1/4 ">
            <Image src="/images/quote.png"  alt='pic' width={200} height={200} className='m-auto ' />
          </span>
          <span className="basis-3/4">
            <div className="flex mt-10 md:mt-0 flex-col md:flex-row   m-auto  text-2xl  ">
              <span>
                <FaQuoteRight className="ml-5 w-[30px] h-[30px] mr-5 text-[#d5d5d5]" />
              </span>
              <span>
                <p>
                {title}
                </p>

                <p className="text-[#16625a] text-2xl mt-10">
                 {desc}
                </p>
              </span>
            </div>
          </span>
        </div>


    </>
  )
}

export default AboutBox