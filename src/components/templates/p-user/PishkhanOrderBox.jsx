'use client'
import React from 'react'
import PishkhanBox from './PishkhanBox'
import { useCart } from '@/context/Cartcontex'

const PishkhanOrderBox = () => {
    const {cart} = useCart()
  return (
   <PishkhanBox title='تعداد سفارشات' count={cart.length === 0 ? 'ثبت نشده' : cart.length} />
  )
}

export default PishkhanOrderBox