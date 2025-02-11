import { } from "bootstrap"
import { useState } from "react"
//modal

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

//images
import qizcha from '../assets/foto/qizaloq.png'

export default function SavolarTop() {
    const token = "7959128674:AAEjXK1Ik24cL56b_Bsrvp6AAdiFBNGvE_g"
    const botid = "6991682621"
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setname] = useState("")
    const [number, setnumber] = useState("")
    const [chek, setchek] = useState("")
 

    const yuborish = (e) => {
        e.preventDefault()
        const xabar = `
            name:${name}
           number:${number}
           chek:${chek}
         `
        fetch(`https://api.telegram.org/bot${token}/sendMessage`, {

            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id: botid,
                text: xabar
            })
        })
            .then((recponce) => recponce.json())
            .then(rec => {
                if (rec) {
                    handleShow()
                    setname("")
                    setnumber("")
                }
            })
    }
    return (
        <div className='container'>


<Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>malumot ketti</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>habar jonatildi bir kun kelib seni topaman</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                

            <div className='row align-items-end'>
                <div className='col-md-6 my-5'>
                    <img src={qizcha} className='qizcha' alt="" />
                </div>
                <div className='col-md-6 py-3 px-5 my-5 bg-white rounded-3 '>
                    <h2 className='text-center my-4'>Отвечаем на вопросы</h2>
                    <p className='text-center my-4'>Мы ответим на все ваши вопросы по телефону,
                        или вы можете записаться на бесплатнвое
                        пробное занятие</p>
                    <input type="text" value={name} onChange={(e) => setname(e.target.value)} className='py-3 my-5 px-4 d-block w-100 rounded-2' placeholder='ismingizni yozing' />
                    <input type="number" value={number} onChange={(e) => setnumber(e.target.value)} className='py-3 my-5 px-4 d-block w-100 rounded-2' placeholder='telefon raqamingizni yozing' />
                    <button onClick={(e) => yuborish(e)} className='btn btn-warning px-5 py-3 mb-5 w-100'>Задать вопрос</button>
                    
                    <input value={chek} onClick={(e) => setchek(e.target.value)} type="checkbox" id='roziman' className='me-3'/>
                    <label htmlFor="roziman" id='roziman ' className=' mb-5'>roziman shu gaplarimga</label>
                </div>
            </div>
        </div>
    )
}
