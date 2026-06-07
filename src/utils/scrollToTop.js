'use client'
import { useEffect, useState } from 'react'
import styles from '../styles/scrollToTop.module.css'
import { MdKeyboardArrowUp } from 'react-icons/md'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 120 ? setIsVisible(true) : setIsVisible(false)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => removeEventListener('scorll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
  }

  return (
    <>
      <button
        onClick={scrollToTop}
        className={isVisible ? styles.scrollToTop : null}
      >
        <MdKeyboardArrowUp className={styles.svg} />
      </button>
    </>
  )
}

export default ScrollToTop
