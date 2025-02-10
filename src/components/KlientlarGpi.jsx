import React from 'react'
//components
import KlientlarGaplari from './KlientlarGaplari'
//img
import imgbir from '../assets/foto/holabir.png'
import imgiki from '../assets/foto/holaiki.png'
import imguch from '../assets/foto/bolauch.png'

export default function KlientlarGpi() {
    return (
        <div className='container'>
            <h3 className='text-center my-5'>О нас говорят клиенты</h3>
            <div className='row'>
                <div className="col-md-3 position-relative opacity-50">
                    <KlientlarGaplari sozlar={"Развивает силу, гибкость и координацию всадника; Выпрямляется осанка и повышается стрессоустойчивость; Общение с лошадью лечит умственные отклонения."} odamrasmi={imgbir} isimlar={"Константин Сюткин"}/>
                </div>
                <div className="col-md-3">
                <KlientlarGaplari sozlar={"Развивает силу, гибкость и координацию всадника; Выпрямляется осанка и повышается стрессоустойчивость; Общение с лошадью лечит умственные отклонения."} odamrasmi={imgiki} isimlar={"Константин Сюткин"}/>
                </div>
                <div className="col-md-3">
                <KlientlarGaplari sozlar={"Позитивные эмоции, расслабление, чувство ответственности и даже некоторой сказочности, сразу появляется красивая осанка, работают все группы мышц."} odamrasmi={imguch} isimlar={"Валентина Сорокина"}/>
                </div>
                <div className="col-md-3 position-relative opacity-50">
                <KlientlarGaplari sozlar={"Плюсов до безумия много! Реакция, общение с животным, любовь, понимание, взаимопонимание, терпение, здесь можно перечислять и перечислять очень много всего!"} odamrasmi={imgbir} isimlar={"Светлана Мирная"}/>
                </div>
            </div>
        </div>
    )
}
