import React from 'react'

//images
import qizcha from '../assets/foto/qizaloq.png'

export default function SavolarTop() {
    return (
        <div className='container'>
            <div className='row align-items-end'>
                <div className='col-md-6 my-5'>
                    <img src={qizcha} className='qizcha' alt="" />
                </div>
                <div className='col-md-6 py-3 px-5 my-5 bg-white rounded-3 '>
                    <h2 className='text-center my-4'>Отвечаем на вопросы</h2>
                    <p className='text-center my-4'>Мы ответим на все ваши вопросы по телефону,
                        или вы можете записаться на бесплатнвое
                        пробное занятие</p>
                    <input type="text" className='py-3 my-5 px-4 d-block w-100 rounded-2' placeholder='ismingizni yozing' />
                    <input type="text" className='py-3 my-5 px-4 d-block w-100 rounded-2' placeholder='telefon raqamingizni yozing' />
                    <button className='btn btn-warning px-5 py-3 mb-5 w-100'>Задать вопрос</button>
                    
                    <input type="checkbox" id='roziman' className='me-3'/>
                    <label htmlFor="roziman" id='roziman ' className=' mb-5'>roziman shu gaplarimga</label>
                </div>
            </div>
        </div>
    )
}
