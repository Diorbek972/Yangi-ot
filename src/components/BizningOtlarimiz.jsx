import React from 'react'

//iconc
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

//img
import otrasmi1 from "../assets/foto/ot1.png"
import otrasmi2 from "../assets/foto/ot2.png"
import otrasmi3 from "../assets/foto/ot3.png"
import otrasmi4 from "../assets/foto/ot4.png"
import otrasmi5 from "../assets/foto/ot5.png"
import BizniOtlar from './BizniOtlar'


export default function BizningOtlarimiz() {
    return (
        <div className='container'>
            <h2 className='text-center'>Наши лошади</h2>
            <div className='row'>
            <div className="box-size display-block col-md-2  opacity-50  position-relative">
            <BizniOtlar otlarimiz={otrasmi1} otlarNomlari={"Жазель"} />
            </div>
            <div className="box-size mt-3  display-block mx-4 col-md-2 ">
            <BizniOtlar otlarimiz={otrasmi2} otlarNomlari={"Юджин"} />
            </div>
            <div className="box-size mt-3  display-block mx-4 col-md-2 " >
            <BizniOtlar otlarimiz={otrasmi3} otlarNomlari={"Мелисса"} />
            </div>
            <div className="box-size mt-3  display-block mx-4 col-md-2 ">
            <BizniOtlar otlarimiz={otrasmi4} otlarNomlari={"Циан"} />
            </div>
            <div className="box-size display-block  opacity-50 col-md-2  position-relative">
            <BizniOtlar otlarimiz={otrasmi5} otlarNomlari={"Хесана"} />
            </div>
                       <div className='text-center'>
                       <FaChevronLeft className='icon-color mx-3'/>
                       <h1 className='inline ' > . . . .</h1>
                          <FaChevronRight  className='icon-color  mx-3'/>
                       </div>
            </div>
        </div>
    )
}
