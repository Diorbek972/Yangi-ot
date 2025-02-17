import React from 'react'
import NegaTanlashadi from './NegaTanlashadi'
//img 
import location from '../assets/foto/location.png'
import clok from '../assets/foto/oclock.png'
import cars from '../assets/foto/carsimg.png'
import chair from '../assets/foto/chair.png'
export default function NegaTanlashdi() {
    return (
        <div className='container mt-5'>
            <h1 className='text-center'>Почему нас выбирают</h1>
            <div className='row mt-5 align-items-center'>
     <div className="col-md-3">
        <NegaTanlashadi img={location} texts={'Удобное расположение'} decriptions={'Мы находимся недалеко от автостанции «Восточный» чтобы вам было удобно добираться'}/>
     </div>
     <div className="col-md-3 ">
        <NegaTanlashadi img={chair} texts={"Обеденная зона "} decriptions={"Имеется столовая, чтобы Вы могли  перекусить и немного отдохнуть. Бесплатно чай, кофе, печенки."}/>
     </div>
     <div className="col-md-3">
        <NegaTanlashadi img={cars} texts={"Профессиональные тренера"} decriptions={"Наши преподаватели имеют награды в конном спорте, и отличные отзывы среди наших учеников"}/>
     </div>
     <div className="col-md-3">
        <NegaTanlashadi img={clok} texts={"Бесплатная парковка"} decriptions={"У нас имеется просторная парковка, чтобы вы могли без проблем припарковать свой автомобиль"}/>
     </div>
            </div>
        </div>
    )
}
