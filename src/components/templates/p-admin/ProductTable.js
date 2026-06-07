'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaStar } from 'react-icons/fa'
import { FaRegStar } from 'react-icons/fa'
import swal from 'sweetalert'
import Swal from 'sweetalert2'

const ProductTable = ({ products }) => {

  const router = useRouter()



  const removeProducts = async (productID) => {

    swal({
      title: 'ایا از حذف اطمینان دارید؟',
      icon: 'warning',
      buttons: ["خیر", "بله"]
    }).then(async (result) => {
      if (result) {
        const res = await fetch(`/api/products/${productID}`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: productID }),
        })
        console.log('res==>', res);

        if (res.status === 200) {
          swal({
            title: 'حذف با موفقیت انجام شد',
            icon: 'success',
            buttons: 'ok'
          }).then(() => {
            router.refresh()

          })
        }

      }

    })



  }

  const seeDetails=async(name)=>{
     swal({
      title:name,
      
     })
  }

const editProduct = async (product) => {
  const { value: formValues } = await Swal.fire({
    title: 'ویرایش محصول',
    html: `
    <div style='display:flex ; justify-content:center; align-items:center; ' >
      <p style="margin-top:8px ; font-weight:900"> نام :</p>
      <input id="swal-input1" class="swal2-input" placeholder="نام" value="${product.name}">
    </div>


      
     <div style='display:flex ; justify-content:center; align-items:center; ' >
        <p style="margin-top:8px ; font-weight:900"> قیمت :</p>
        <input id="swal-input2" class="swal2-input" placeholder="قیمت" value="${product.price}">
     </div>

      <div style='display:flex ; justify-content:center; align-items:center; ' >
        <p style="margin-top:8px ; font-weight:900"> امتیاز :</p>
        <input id="swal-input3" class="swal2-input" placeholder="امتیاز" value="${product.score}">
     </div>

     
      <div style='display:flex ; justify-content:center; align-items:center; ' >
        <p style="margin-top:8px ; font-weight:900"> ادرس عکس :</p>
        <input id="swal-input4" class="swal2-input" placeholder="آدرس عکس" value="${product.img}">
     </div>

      <div style='display:flex ; justify-content:center; align-items:center; ' >
        <p style="margin-top:8px ; font-weight:900"> تگ  :</p>
        <input id="swal-input5" class="swal2-input" placeholder="تگ‌ها با ویرگول" value="${product.tags?.join(',')}">
     </div>

       <div style='display:flex ; justify-content:center; align-items:center; ' >
        <p style="margin-top:8px ; font-weight:900"> توضیحات کوتاه  :</p>
        <input id="swal-input6" class="swal2-input" placeholder="توضیحات کوتاه " value="${product.shortDescription}">
     </div>

       <div style='display:flex ; justify-content:center; align-items:center; ' >
        <p style="margin-top:8px ; font-weight:900"> توضیحات بلند  :</p>
        <input id="swal-input7" class="swal2-input" placeholder="توضیحات بلند" value="${product.longDescription}">
     </div>

       <div style='display:flex ; justify-content:center; align-items:center; ' >
        <p style="margin-top:8px ; font-weight:900"> لوگو  :</p>
        <input id="swal-input8" class="swal2-input" placeholder="لوگو" value="${product.logo}">
     </div>
       <div style='display:flex ; justify-content:center; align-items:center; ' >
        <p style="margin-top:8px ; font-weight:900"> کد  :</p>
        <input id="swal-input9" class="swal2-input" placeholder="کد" value="${product.code}">
     </div>
       <div style='display:flex ; justify-content:center; align-items:center; ' >
        <p style="margin-top:8px ; font-weight:900"> دسته بندی  :</p>
        <input id="swal-input10" class="swal2-input" placeholder="دسته بندی" value="${product.category}">
     </div>
       <div style='display:flex ; justify-content:center; align-items:center; ' >
        <p style="margin-top:8px ; font-weight:900"> وزن  :</p>
        <input id="swal-input11" class="swal2-input" placeholder="وزن" value="${product.weight}">
     </div>
       <div style='display:flex ; justify-content:center; align-items:center; ' >
        <p style="margin-top:8px ; font-weight:900">  تعداد :</p>
        <input id="swal-input12" class="swal2-input" placeholder="تعداد" value="${product.count}">
     </div>
       <div style='display:flex ; justify-content:center; align-items:center; ' >
        <p style="margin-top:8px ; font-weight:900"> نحوه ذخیره  :</p>
        <input id="swal-input13" class="swal2-input" placeholder="نحوه ذخیره" value="${product.howToSave}">
     </div>
     
    
 
     
    `,
    focusConfirm: false,
    confirmButtonText: 'ذخیره',
    cancelButtonText: 'لغو',
    showCancelButton: true,
    preConfirm: () => {
      return {
        id: product._id,
        name: document.getElementById('swal-input1').value,
        price: document.getElementById('swal-input2').value,
        score: document.getElementById('swal-input3').value,
        img: document.getElementById('swal-input4').value,
        tags: document.getElementById('swal-input5').value.split(','),
        shortDescription: document.getElementById('swal-input6').value,
        longDescription: document.getElementById('swal-input7').value,
        logo: document.getElementById('swal-input8').value,
        code: document.getElementById('swal-input9').value,
        category: document.getElementById('swal-input10').value,
        weight: document.getElementById('swal-input11').value,
        count: document.getElementById('swal-input12').value,
        howToSave: document.getElementById('swal-input13').value,

      }
    },
  })

  if (formValues) {
    const res = await fetch(`/api/products/${product._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues),
    })

    if (res.status === 200) {
      Swal.fire({
        title: 'محصول با موفقیت ویرایش شد',
        icon: 'success',
        confirmButtonText: 'باشه',
      }).then(() => {
        router.refresh()
      })
    } else {
      Swal.fire('خطا', 'ویرایش انجام نشد', 'error')
    }
  }
}



  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg  mt-20 ">
        <table className="w-full text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-xl bg-green-400 text-white">
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />{' '}
                  <label for="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                شناسه
              </th>
              <th scope="col" className="px-6 py-3">
                نام
              </th>

              <th scope="col" className="px-6 py-3">
                قیمت
              </th>
              <th scope="col" className="px-6 py-3">
                امتیاز
              </th>
              <th scope="col" className="px-6 py-3">
                مشاهده جزئیات
              </th>
              <th scope="col" className="px-6 py-3">
                ویرایش
              </th>
              <th scope="col" className="px-6 py-3">
                حذف
              </th>

            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />{' '}
                      <label for="checkbox-table-search-1" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>

                  <td className="px-6 py-4">{index + 1}</td>
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src={product.img}
                      alt="Jese image"
                    />{' '}
                    <div className="ps-3">
                      <div className="text-base font-semibold">
                        {product.name}
                      </div>

                    </div>
                  </th>
                  <td className="px-6 py-4">
                    {product.price}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">

                      {
                        product.score
                      }

                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <a
                    onClick={() => seeDetails(`نام : ${product.name} , قیمت : ${product.price}`)}
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      مشاهده جزییات
                    </a>
                  </td>


                  <td className="px-6 py-4">
                    <a
                      onClick={() => editProduct(product)}

                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline "
                    >
                      ویرایش
                    </a>
                  </td>

                  <td className="px-6 py-4">
                    <a
                      onClick={() => removeProducts(product._id)}

                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      حذف
                    </a>
                  </td>



                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ProductTable