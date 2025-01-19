import React from 'react'
import Clubs from './Clubs'
//img
import ot1 from '../assets/foto/ot-1.png'
import ot2 from '../assets/foto/ot-2.png'
import ot3 from '../assets/foto/ot-3.png'
import ot4 from '../assets/foto/ot-4.png'
import ot5 from '../assets/foto/ot-5.png'
import ot6 from '../assets/foto/ot-6.png'
export default function Club() {
  return (
   <div className='backrasm-ikinchi'>
 <div className='container my-5'>
      <h1 className='text-center'>Направления клуба</h1>
      <div className='row'>
        <div className='col-md-4 p-5 my-5'>
          <Clubs img={ot1} deploy={"Уроки верховой езды"} texts={"Уроки профессиональной верховой езды для любителей и начинающих"}/>
          <Clubs img={ot2} deploy={"Прогулки верхом с тренером"} texts={"Тренировка клиентов, подготовка к занятиям конным спортом на профессиональном уровне под руководством опытных теннеров"}/>
          
        </div>
        <div className='col-md-4 p-5 my-5'>
       
          <Clubs img={ot4} deploy={"Прогулки верхом с тренером"} texts={"Тренировка клиентов, подготовка к занятиям конным спортом на профессиональном уровне под руководством опытных теннеров"}/>
          <Clubs img={ot3} deploy={"Фотосессии"} texts={"Уроки профессиональной верховой езды для любителей и начинающих"}/>
        </div>
        <div className='col-md-4 p-5 my-5'>
        
        <Clubs img={ot6} deploy={"Фотосессии"} texts={"Уроки профессиональной верховой езды для любителей и начинающих"}/>
        <Clubs img={ot5} deploy={"Прогулки верхом с тренером"} texts={"Тренировка клиентов, подготовка к занятиям конным спортом на профессиональном уровне под руководством опытных теннеров"}/>
        </div>
      </div>
     <div className='text-center'>
     <button className='btn btn-warning px-5 py-3 mb-5'>записаться</button>
     </div>
    </div>
   </div>
  )
}
