import React from 'react'
//foto
import boyhorse from '../assets/foto/otdagibola.png'
import AboutClubs from './AboutClubs'
export default function Club() {
  return (
    <div className='my-5'>
      <div className="container">
        <h1 className='text-center'> О нашем клубе</h1>
        <div className='row'>
        <div className="col-md-6 ">
    <img src={boyhorse} className='w-100' alt="" />
        </div>
        <div className="col-md-6">
    <div className='row'>
        <div className="col-md-6">
        <AboutClubs number={"1100+"} text={"Довольный посетителей за последний год"}/>
        <AboutClubs number={"20+"} text={"Выпущенных профессиональных спортсменов за 1 год"}/>
        </div>
        <div className="col-md-6">
        <AboutClubs number={"50+"} text={"Проведенных мероприятий за 6 месяцев"}/>
        <AboutClubs number={"15+"} text={"Регулярный занятий в неделю с профессиональными наставниками"}/>
        </div>
    </div>
        <div className='mt-5'>
            <p className='text'>Занятия проводятся индивидуально и в группах, стоимость также будет зависеть от ваших навыков и умений. Более выгодные условия
предусмотрены для регулярных занятий при покупке абонементов.
Для тех, кто хочет отточить своё мастерство, разработаны программы по специализации (конкур, выездка и другие), участие в соревнованиях и чемпионатах. Для самых маленьких любителей лошадей действуют
пони-клубы, где ребята учатся ухаживать за животными и ездить на милых и добрых пони.</p>
        </div>
        </div>
        </div>
      </div>
    
    </div>
  )
}
