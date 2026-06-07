import React from 'react'

const MoreInfo = ({products}) => {
  return (
    <>
    <div className='w-[100%] m-auto'>
        <div className='w-full mb-2 text-xl justify-start items-center h-[55px] bg-[#f2f2f2] flex'>
            <p className='w-1/2'>وزن</p>
            <p className='w-1/2'>{products.weight} پوند</p>

            
        </div>

        <div className='w-full text-xl justify-start items-center h-[55px] bg-white flex'>
            <p className='w-1/2'>لوگو</p>
            <p className='w-1/2'>{products.logo} </p>

            
        </div>
        
    </div>


    </>
  )
}

export default MoreInfo