'use client'
import React, { useState } from 'react'
import styles from '../../../../styles/Tabs.module.css'
import Details from './Details'
import MoreInfo from './MoreInfo'
import Footer from '@/components/modules/footer/Footer'
import NewsLetter from '../NewsLetter'
import ProductComment from './ProductComment'
import CommentForm from './CommentForm'

const Tabs = ({products}) => {
  const [tabs, setTabs] = useState('description')
  return (
    <>
      <div className="w-[75%] m-auto flex flex-col md:flex-row text-3xl cursor-pointer ">
        <p onClick={() => setTabs('description')} className={styles.tabs}>
          توضیحات
        </p>

        <p onClick={() => setTabs('moreinfo')} className={styles.tabs}>
          توضیحات تکمیلی
        </p>

        <p onClick={() => setTabs('comments')} className={styles.tabs}>
          نظرات ( {products.comments.filter((comment)=>comment.isAccept === true).length}
          )
        </p>
      </div>

      <div className="w-[75%] text-justify m-auto">
        {tabs === 'description' && <Details  products={products} />}

        {tabs === 'moreinfo' && <MoreInfo products={products} />}
        {tabs === 'comments' && (
          <>
            <ProductComment  comments={JSON.parse(JSON.stringify(products.comments))}  />
            <CommentForm productID={products._id}  />
          </>
        )}
      </div>
      <NewsLetter />
      <Footer />
    </>
  )
}

export default Tabs
