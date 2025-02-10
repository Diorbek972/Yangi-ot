import React from 'react'

export default function BizniOtlar({otlarimiz, otlarNomlari}) {
  return (
    <div className='d-flex'>
         <div className='py-3 px-3 bacrounds '>
        <img src={otlarimiz} className='img-fluid' alt="" />
        <h3 className='text-center  my-3'>{otlarNomlari}</h3>
        <p className='text-center  my-3'>Уроки профессиональной верховой езды для любителей и начинающих</p>
      </div>
    </div>
  )
}
