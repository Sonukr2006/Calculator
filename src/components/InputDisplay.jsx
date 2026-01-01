import React from 'react'
import style from '../components/InputDisplay.module.css'

const InputDisplay = ({value}) => {
  return (
    <>
      <input className={style.styles}  type='text' value={value} readOnly/>
    </>
  )
}

export default InputDisplay