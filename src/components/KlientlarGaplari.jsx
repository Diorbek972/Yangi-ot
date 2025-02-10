import React from 'react'
//icons
import { SlArrowDown } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";
import { TiSocialFacebookCircular } from "react-icons/ti";

export default function KlientlarGaplari({ sozlar, odamrasmi, isimlar }) {
  return (
    <div className='shadow py-3 px-4'>
      <p>{sozlar}</p>
      <button class="btn shadow text-success d-block mx-auto my-4" data-bs-toggle="button">Подробнее <SlArrowDown /></button>
      <img src={odamrasmi} className='d-inline' alt="" />
      <div className='d-inline'>
      <h5 className='d-inline'>{isimlar}</h5>
        <FaInstagram className='icon-with me-4 my-4' />
        <TiSocialFacebookCircular className='icon-with' />
      </div>
    </div>
  )
}
