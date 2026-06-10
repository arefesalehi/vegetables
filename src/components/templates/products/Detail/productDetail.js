'use client'
import Image from 'next/image'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { MdCompareArrows } from 'react-icons/md'
import { IoMdShare } from 'react-icons/io'
import { IoMdTimer } from 'react-icons/io'
import { FaTruck } from 'react-icons/fa6'
import Tabs from './Tabs'
import { showswal } from '@/utils/helper'
import { useState } from 'react'
import AddToWishlist from '../../index/addtowishlist/AddToWishlist'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const ProductDetail = ({ products }) => {

  const [counter, setCounter] = useState(1);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    if (cart.length) {
      const IsInCard = cart.some((item) => item.id === products._id)
      if (IsInCard) {
        cart.forEach((item) => {
          if (item.id === products._id) {
            item.counter = item.counter + counter
          }
        })

        localStorage.setItem('cart', JSON.stringify(cart))
        showswal('محصول با موفقیت به سبد خرید اضافه شد', 'success', 'ok')
      } else {
        const cardItem = {
          id: products._id,
          name: products.name,
          price: products.price,
          img: products.img,
          counter,
        }

        cart.push(cardItem)
        localStorage.setItem('cart', JSON.stringify(cart))
        showswal('محصول با موفقیت به سبد خرید اضافه شد', 'success', 'ok')
      }

    } else {
      const cardItem = {
        id: products._id,
        name: products.name,
        price: products.price,
        counter,
      }
      cart.push(cardItem)
      localStorage.setItem('cart', JSON.stringify(cart))
      showswal('محصول با موفقیت به سبد خرید اضافه شد', 'success', 'ok')
    }
  }

  return (
    <>
      <div className="w-full h-auto ">
        <div className="w-[80%] m-auto flex flex-col justify-center items-center md:items-start md:justify-start md:flex-row ">
          <div className="w-1/2">
            <Image
              src={products.img}
              width={700}
              height={400}
              alt="pic"
              className='w-[700px] h-[400px] '
            />
          </div>
          <div className="md:w-1/2 w-full md:mr-20">
            <h1 className="xl:text-3xl text-2xl"> {products.name}</h1>
            <h1 className="xl:text-3xl text-2xl text-[#00512C] mt-5">
              {products.price.toLocaleString()} تومان
            </h1>
            <p className="mt-5 mb-10 text-lg lg:text-xl text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
              {products.shortDescription}
            </p>

            <div className="flex">
              <FaCheckCircle className="bg-[00512C] ml-5" />
              <p className="text-xl mb-10">{products.counter} عدد در انبار</p>
            </div>


            <div className="flex">
              <span className="lg:w-[20%] w-[45%]  ml-5 flex justify-between items-center pr-3 pl-3 h-[50px]  bg-[#ECECEC] rounded-[30px]">
                <div onClick={() => setCounter(counter + 1)} className="w-[30px] h-[30px] flex justify-center items-center bg-white rounded-[50%]">
                  <FaPlus />
                </div>
                <div className="flex justify-center items-center text-lg">{counter}</div>
                <div onClick={() => setCounter(counter - 1)} className="w-[30px] h-[30px] flex justify-center items-center bg-white rounded-[50%]">
                  <FaMinus />
                </div>
              </span>
              <button
                onClick={addToCart}
                className="w-[80%]  bg-[#85f109] hover:bg-[#84D814]  hover:text-white flex text-xl items-center justify-center border border-[#00512C] h-[50px] rounded-[30px] "
              >
                افزودن به سبد خرید
              </button>
            </div>

            <button className="w-full hover:bg-[#84D814] flex items-center justify-center border  text-white mt-5 bg-[#00512C] h-[50px] rounded-[30px] ">
              خرید کنید
            </button>

            <div className="flex text-xl mt-10 mb-10">
              <div className="flex ml-20">
                <MdCompareArrows className="ml-10 hover:text-[#00512C] w-[20px] h-[20px]" />
                <p>مقایسه</p>
              </div>

              <div className="flex mr-5">
                <IoMdShare className="ml-10 hover:text-[#00512C] w-[20px] h-[20px] " />
                <p>اشتراک گذاری</p>
              </div>
            </div>

            <div className="w-full h-[100px] mt-10 flex flex-col justify-center items-center bg-[#EDEDED] rounded-[10px]">
              <p className="text-xl mb-5">تضمین تسویه حساب ایمن و مطمئن</p>
              <Image
                src="/images/guarantee_safe_checkout.png"
                width={200}
                height={200}
                alt="pic"
              />
            </div>

            <div className="flex text-xl mt-10 mb-5">
              <IoMdTimer className="ml-10  w-[20px] h-[20px] " />
              <p>
                <strong>زمان تحویل تخمینی:</strong>1 شهریور 1403
              </p>
            </div>

            <div className="flex text-xl  border-b-2">
              <FaTruck className="ml-10  w-[20px] h-[20px] " />
              <p>
                {' '}
                <strong>ارسال و مرجوعی رایگان :</strong>
                در تمام سفارشات بیش از 700 تومان
              </p>
            </div>

            <p className="mt-10  ">
              <strong className='ml-5'>کد کالا (SKU):</strong>
              {products.code}
            </p>

            <p className="mt-5">
              <strong className='ml-5'> دسته‌بندی :</strong>
              {products.category}
            </p>

            <p className="mt-5 mb-40">
              <strong className='ml-5'> برچسب ها:</strong>
              {products.tags.join(',')}
            </p>
          </div>
        </div>
      </div>

      <Tabs products={products} />
    </>
  )
}

export default ProductDetail
