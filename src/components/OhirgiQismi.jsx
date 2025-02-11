import React from 'react'
//icons 
import { IoLocationSharp } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { GoClockFill } from "react-icons/go";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { HiChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { PiTelevisionSimpleFill } from "react-icons/pi";
export default function OhirgiQismi() {
    return (
        <div className='container'>
            <div className="row py-5 my-5">
                <div className="col-md-5 py-4 px-5 rounded-3 bg-light ">
                    <h2 className='mb-5'>Контакты</h2>
                    <h1 className='text-success my-5'>__</h1>
                    <div>
                    
                    <p className='my-4'><IoLocationSharp className='me-3 text-warning'/>ул. Ленина, 25, офис 65</p>

                    <p className='my-4'><BsTelephoneFill className='me-3 text-warning'/>+7 (495) 000-00-00</p>
                    
                    <p className='my-4'><MdEmail className='me-3 text-warning'/>mail@somemail.com</p>
                    
                    <p><GoClockFill className='me-3 text-warning'/>Пн-Пт: 10:00 - 19:00</p>
                    <p className='ms-4'>Сб: 10:00 - 17:00</p>
                    <p className='ms-4'>Вс: выходной</p>
                    </div>
                    <div className='text-end'>
                    <FaInstagramSquare className='text-warning icon-with  ms-auto'/>
                    <FaYoutube className='text-warning icon-with mx-2'/>
                    <HiChatBubbleOvalLeftEllipsis className='text-warning icon-with mx-2'/>
                    <PiTelevisionSimpleFill className='text-warning icon-with mx-2'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
