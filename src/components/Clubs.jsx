import React from 'react'

export default function Clubs({img, deploy, texts}) {
  return (
    <div className='cards p-4 rounded-2'>
      <img className='w-100' src={img} alt="" />
      <h3 className='my-3'>{deploy}</h3>
      <h2 className='chiziqcha text-center pb-3'>___</h2>
      <p>{texts}</p>
    </div>
  )
}
