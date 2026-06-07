import React from 'react'

const HeaderTitle = ({title}) => {
  return (
    <>
    <div className='mycontainer'>
       <div className='flex w-full h-[50px] mr-5  md:mr-0   lg:mt-20   '>
       <h1 className=' text-3xl md:text-5xl lg:mr-10 md:mt-10 md:mr-10 lg:mt-0 sm:mt-10 sm:mr-10  xl:mr-0 font-bold'>   {title}</h1>
       </div>

        
    </div>


    </>
  )
}

export default HeaderTitle