import React from 'react'

const PishkhanBox = ({title, count}) => {
  return (
    <div className='w-[200px] h-[100px] mb-2 ml-3 bg-green-600 rounded-[10px]'>
        <div className='text-2xl text-white text-center p-5 '>
            <p>{title}</p>
        </div>
        <div className='text-2xl text-center p-5 text-white'>
           {count}
        </div>


    </div>
  )
}

export default PishkhanBox