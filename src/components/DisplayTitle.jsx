import React from 'react'
import style from '../components/Display.module.css'


const DisplayTitle = () => {
  return (
    <>
        <h1 className={style.title}>Hello, User 🎭 </h1>
        <h3 className='bg-success-subtle text-success-emphasis p-3 mb-2'>Calculator</h3>
    </>
  )
}

export default DisplayTitle