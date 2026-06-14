'use client'

import { showswal } from '@/utils/helper'
import { useRouter } from 'next/navigation'

import React, { useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa'

const AddToWishlist = ({ notify, productId, userId }) => {

const router= useRouter()

console.log('userid' , userId);



  const addTowishlist = async (e) => {
    e.preventDefault()
    if (!userId || typeof userId !== "string" ) {
      return showswal("برای افزودن به علاقه مندی ها ابتدا لاگین شوید  ", "error", "ok")

    }

   

    const res = await fetch('/api/wishlists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ product: productId, user: userId  })
    });

    const data = await res.json();
    console.log('✅ data ==>', data);

    if (res.status === 201) {
      notify();
    router.refresh()

    } else {
      console.error('⚠️ Error adding to wishlist:', data.message);
    }

  };





  return (
    <>
      <div onClick={addTowishlist} className="absolute top-[20px] left-[30px] cursor-pointer  ">
        <FaHeart className="text-[#c1c1c1]  hover:text-[#02693a]  w-[18px] h-[18px]" />
      </div>
    </>
  )
}

export default AddToWishlist
