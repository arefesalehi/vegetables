'use client'
import React, { useEffect } from 'react'
import { FaFilter, FaStar } from "react-icons/fa";
import FilterBox from './FilterBox';
import { FaList } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import ProductcardShop from './ProductcardShop';
import ProductcardHorizontal from './ProductcardHorizontal';
import { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { input } from '@material-tailwind/react';

const FilterShop = ({ products }) => {
  const [howToDisplay, setHowToDisplay] = useState('row')
  const [status, setStatus] = useState('default')
  const [productFilter, setProductFilter] = useState([])

  const [categoryFilter, setCategoryFilter] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [weightFilter, setWeightFilter] = useState([]);
  const [ratingFilter, setRatingFilter] = useState([]);

 
  useEffect(() => {
    let sorted = [...products];

    // فیلتر دسته‌بندی
    if (categoryFilter.length > 0) {
      sorted = sorted.filter((product) => categoryFilter.includes(product.category));
    }

    // فیلتر قیمت
    sorted = sorted.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // فیلتر وزن
    if (weightFilter.length > 0) {
      sorted = sorted.filter((product) => weightFilter.includes(String(product.weight)));
    }

    // فیلتر امتیاز
    if (ratingFilter.length > 0) {
      sorted = sorted.filter((product) =>
        ratingFilter.includes(String(product.score)),


      );
    }

    // مرتب‌سازی (بر اساس حالت انتخاب‌شده)
    switch (status) {
      case "free": {
        sorted = sorted.filter((product) => product.price === 0);
        break;
      }
      case "expensive": {
        // sorted = sorted.sort((a, b) => b.price - a.price);

        sorted = sorted.filter((product) => product.price > 160000)
        setProductFilter(sorted)
        break;
      }
      case "popular": {
        // sorted = sorted.sort((a, b) => b.score - a.score);
        sorted = sorted.filter((product) => product.price < 150000)
        setProductFilter(sorted)
        break;
      }
      case "count": {
        // sorted = sorted.sort((a, b) => b.count - a.count);
        sorted = sorted.filter((product) => product.count > 0)

        setProductFilter(sorted)
        break;
      }
      default: {
        // هیچ ترتیب خاصی نیاز نیست
        break;
      }
    }

    setProductFilter(sorted);
  }, [status, products, categoryFilter, priceRange, weightFilter, ratingFilter]);






  return (
    <>

      <div className='xl:w-[80%] lg:w-[98%] flex-col lg:flex-row  m-auto  h-auto pb-20  flex'>
        <div className='basis-1/4  '>
          <div className='flex text-xl p-5 border-b-[1px] border-solid border-b-gray-500' >
            <FaFilter />
            <p>  فیلتر بر اساس</p>
          </div>


          <FilterBox title='دسته بندی' id='category'>
            {['سبزیجات', 'قهوه', 'میوه', 'نوشیدنی', 'گوشت'].map((category) => {
              return (
                <>
                  <div className='flex items-center justify-start pr-8 pt-8'>

                    <input type="checkbox" name="" defaultValue=''
                    
                      value={category}
                      checked={categoryFilter.includes(category)}
                      onChange={(event) => {
                        const selectedCategory = event.target.value;

                        setCategoryFilter((currentCategories) => {
                          const isAlreadySelected = currentCategories.includes(selectedCategory);

                          if (isAlreadySelected) {
                            // اگر دسته قبلاً انتخاب شده، حذفش کن
                            return currentCategories.filter((category) => category !== selectedCategory);
                          } else {
                            // اگر جدیداً انتخاب شده، به لیست اضافه‌اش کن
                            return [...currentCategories, selectedCategory];
                          }
                        });
                      }}

                    />
                    <p className='mr-3 text-md   accent-green-500'>  {category}</p>
                  </div>
                </>

              )
            })

            }


          </FilterBox>

          <FilterBox title=' قیمت برحسب تومان' id='price'>

            <div className="relative mb-6 px-5 py-2 mt-10 ">
              {/* <label htmlFor="labels-range-input" className="sr-only">Labels range</label> */}
              <input
                id="labels-range-input"
                type="range"
                // defaultValue="1000"
                min="0"
                max="200000"
                step="10000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                className="w-full h-2 bg-green-600 rounded-lg appearance-none cursor-pointer dark:bg-green-700"
              />
     
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-[16px] -bottom-6">0</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">100</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">150</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-[14px] -bottom-6">200</span>
    
            </div>


            <div className='flex justify-between pr-5 pl-5 pb-5 pt-10'>
              <span className='font-bold' >محدوده (تومان ):<span className='mr-10'>0</span>  </span><span className='font-bold'> الی</span> <span className='font-bold'> {priceRange[1].toLocaleString()}تومان</span>
            </div>
            {/* <div className='mt-5 mr-5'>
              <button type="" className='p-3 bg-green-600 rounded text-white'>فیلتر</button>
            </div> */}



          </FilterBox>

          <FilterBox title=' وزن برحسب گرم' id='wight'>
            {
              ['100', '200', '500'].map((weight) => {
                return (
                  <>
                    <div key={weight} className='flex items-center justify-start pr-8 pt-8'>
                      <input type="checkbox" name="" defaultValue=''
                        value={weight}
                        checked={weightFilter.includes(weight)}
                        onChange={(event) => {
                          const selectedWeight = event.target.value;

                          setWeightFilter((currentWeight) => {
                            const isAlreadySelected = currentWeight.includes(selectedWeight);

                            if (isAlreadySelected) {
                              // اگر دسته قبلاً انتخاب شده، حذفش کن
                              return currentWeight.filter((weight) => weight !== selectedWeight);
                            } else {
                              // اگر جدیداً انتخاب شده، به لیست اضافه‌اش کن
                              return [...currentWeight, selectedWeight];
                            }
                          });
                        }}

                      />
                      <p className='mr-3'>{weight}  </p>
                    </div>
                  </>
                )
              })
            }



          </FilterBox>

          <FilterBox title='امتیاز' id='score'>
            {
              ["5", "4", "3", "2", "1"].map((score) => {
                return (
                  <>
                    <div key={score} className='flex items-center justify-start pr-8 pt-8'>
                      <input type="checkbox" name="" defaultValue=''
                        value={score}
                        checked={ratingFilter.includes(score)}
                        onChange={(event) => {
                          const selectedScore = (event.target.value);;

                          setRatingFilter((currentScore) => {
                            const isAlreadySelected = currentScore.includes(selectedScore);

                            if (isAlreadySelected) {
                              // اگر دسته قبلاً انتخاب شده، حذفش کن
                              return currentScore.filter((score) => score !== selectedScore);
                            } else {
                              // اگر جدیداً انتخاب شده، به لیست اضافه‌اش کن
                              return [...currentScore, selectedScore];
                            }
                          });
                        }}

                      />
                      <p className='mr-3 flex'>
                        {
                          Array(Number(score)).fill(0).map((item, index) => {
                            return (
                              <AiFillStar className='text-orange-600' />
                            )
                          })
                        }
                        {
                          Array(5 - Number(score)).fill(0).map((item, index) => {
                            return (
                              < AiOutlineStar className='text-orange-600' />
                            )
                          })
                        }


                      </p>
                    </div>
                  </>
                )
              })
            }


          </FilterBox>
        </div>


        <div className='basis-3/4 '>
          <div className='p-2 mr-2 rounded-[10px] w-[95%] mt-10 lg:mt-0 lg:w-full bg-gray-300  flex justify-between items-center'>
            <div className='flex'>
              <div onClick={() => setHowToDisplay('column')} className='w-[40px] h-[40px] rounded hover:bg-green-700 hover:text-white  bg-white flex justify-center items-center ml-2'>
                <FaList className='w-[20px] h-[20px]   ' />
              </div>
              <div onClick={() => setHowToDisplay('row')} className='w-[40px] h-[40px] rounded hover:bg-green-700 hover:text-white bg-white flex justify-center items-center ml-2'>
                <BiSolidCategory className='w-[20px] h-[20px]' />
              </div>
            </div>


            <div>
              <form className=" " >
                <select id="sort" defaultValue='' onChange={(e) => setStatus(e.target.value)} value={status} className= "bg-gray-50  w-[119px] md:w-[200px] h-[40px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option defaultValue='-1' >مرتب سازی پیش فرض  </option>
                  <option value="popular"  >مرتب سازی بر اساس محبوبیت </option>
                  <option value="count" >مرتب سازی بر اساس  موجودی</option>
                  <option value="free">مرتب سازی بر اساس رایگان</option>
                  <option value="expensive"  >مرتب سازی بر اساس گرانترین</option>
                </select>
              </form>

            </div>

          </div>

          {
            howToDisplay === 'row' ? (<div className='flex flex-wrap justify-center'>
              {
                productFilter.length === 0 ? (<div className='bg-red-500 text-white w-full h-[50px] mt-20 flex justify-center items-center text-xl rounded'>
                  <p>هیچ محصولی برای این فیلتر موجود نیست</p>
                </div>
                ) : (
                  productFilter.map((product) => {
                    return (
                      <>
                        <ProductcardShop key={product._id} {...product} />
                      </>
                    )
                  })

                )
              }



            </div>) : (


              productFilter.length === 0 ? (
                <div className='bg-red-500 text-white w-full h-[50px] mt-20 flex justify-center items-center text-xl rounded'>
                  <p>هیچ محصولی برای این فیلتر موجود نیست</p>
                </div>

              ) : (
                productFilter.map((product) => {
                  return (
                    <div key={product._id}>
                      <ProductcardHorizontal  {...product} />


                    </div>
                  )
                })
              )




              // productFilter.map((product) => {
              //   return (
              //     <div key={product._id}>
              //       <ProductcardHorizontal  {...product} />


              //     </div>
              //   )
              // })

            )
          }









        </div>

      </div>

    </>
  )
}

export default FilterShop