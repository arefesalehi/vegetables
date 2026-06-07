import React from 'react'
import Image from 'next/image'
const Details = ({products}) => {
  return (
    <>
      <div className=" mb-20">
        <p className="text-xl mb-10">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
          پایان رسد.
        </p>

        <p className="text-xl mb-10">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </p>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 w-full">
            <Image src="/images/product-single.jpg"  alt='pic' width={600} height={300} />
          </div>

          <div className="md:w-1/2 w-full">
            <h1 className="text-2xl mt-10 md:mt-0 font-semibold mb-10 mr-5">مشخصات محصول</h1>
            <ul className="list-[circle] text-xl mr-10">
              <li className="mb-3">
                <a className="flex " href="">
                  <strong>بسته بندی:</strong>
                  <p className="mr-2">بسته {products.weight} گرمی</p>
                </a>
              </li>
              <li className="mb-3">
                <a className="flex " href="">
                  <strong>روش ذخیره سازی:</strong>
                  <p className="mr-2">{products.howToSave}</p>
                </a>
              </li>
              <li className="mb-3">
                <a className="flex " href="">
                  <strong>ارزش غذایی:</strong>
                  <p className="mr-2">
                    بیش از ۲۰ ویتامین، فیبر، کالی، آنزیم اکتینیدین
                  </p>
                </a>
              </li>
              <li className="mb-3">
                <a className="flex " href="">
                  <strong>فصل:</strong>
                  <p className="mr-2"> بهار تا اواخر پاییز</p>
                </a>
              </li>
              <li className="mb-3">
                <a className="flex " href="">
                  <strong>ویژگی ها:</strong>
                  <p className="mr-2"> 100% ارگانیک، تضمین تازگی</p>
                </a>
              </li>
              <li className="mb-3">
                <a className="flex " href="">
                  <strong>گواهی:</strong>
                  <p className="mr-2">گواهی ایمنی مواد غذایی</p>
                </a>
              </li>
              <li className="mb-3">
                <a className="flex " href="">
                  <strong>تاریخ انقضا:</strong>
                  <p className="mr-2">1 هفته</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Details
