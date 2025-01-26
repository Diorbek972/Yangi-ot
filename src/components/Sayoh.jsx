import React from 'react'
//foto
import imgbir from '../assets/foto/unsplash_komor3oKNCk.png'
import imgiki from '../assets/foto/2.png'
import imguch from '../assets/foto/4.png'
import imgtort from '../assets/foto/5.png'
import imgbesh from '../assets/foto/6.png'
import imgolti from '../assets/foto/7.png'
import imgyetti from '../assets/foto/8.png'
import imgsakiz from '../assets/foto/9.png'
import imgtoqiz from '../assets/foto/10.png'
import imgon from '../assets/foto/unsplash_mjXm9gYP4wE.png'
//icons
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Sayoh() {
    return (
        <div className='container'>
            <h2 className='text-center my-5'>Наши посетители</h2>
            <div>
              <div className='d-flex gap-1'>
                <img className='img-fotos img-fluid' src={imgbir} alt="png" />
              <img className='img-fotos img-fluid' src={imgiki} alt="png" />
              <img className='img-fotos img-fluid' src={imguch} alt="png" />
              <img className='img-fotos img-fluid' src={imgtort} alt="png" />
              <img className='img-fotos img-fluid' src={imgbesh} alt="png" />
              </div>
              <div className='d-flex gap-1'>
              <img className='img-fotos img-fluid' src={imgolti} alt="png" />
              <img className='img-fotos img-fluid' src={imgyetti} alt="png" />
              <img className='img-fotos img-fluid' src={imgsakiz} alt="png" />
              <img className='img-fotos img-fluid' src={imgtoqiz} alt="png" />
              <img className='img-fotos img-fluid' src={imgon} alt="png" />
              </div>
            </div>
            <div className='icon my-5 text-center align-items-center'>
            <FaChevronLeft className='icon-color mx-3'/>
           <h1 className='inline'> . . . .</h1>
              <FaChevronRight  className='icon-color  mx-3'/>
            </div>
        </div>
    )
}
