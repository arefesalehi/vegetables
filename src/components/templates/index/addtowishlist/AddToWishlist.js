'use client'

import { showswal } from '@/utils/helper'
import React, { useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa'

const AddToWishlist = ({ notify, productId, userId }) => {

  const [user, setUser] = useState({})


  useEffect(() => {
    const authUser = async () => {
      const res = await fetch("/api/auth/me");
      console.log(res);
      if (res.status === 200) {
        const data = await res.json();
        console.log(data);
        setUser({ ...data });
      }
    };

    authUser();
  }, []);

  const addTowishlist = async (e) => {
    e.preventDefault()
    if (!userId) {
      return showswal("برای افزودن به علاقه مندی ها ابتدا لاگین شوید  ", "error", "ok")

    }
    const res = await fetch('/api/wishlists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ product: productId, user: userId })
    });

    const data = await res.json();
    console.log('✅ data ==>', data);

    if (res.status === 201) {
      notify();
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
