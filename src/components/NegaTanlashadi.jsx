import React from 'react'

export default function NegaTanlashadi({img, texts, decriptions}) {
  return (
  <div className='text-center align-items-center'>
  <img src={img} alt="" />
  <h3 className='py-4 align-items-center'>{texts}</h3>
  <p>{decriptions}</p>
  </div>
  )
}
