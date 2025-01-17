import horse from '../assets/foto/tulporcha.png'
import bacraound from '../assets/foto/background.png'

export default function banner() {
  return (


<div className="">
<div className="container ">
      <div className="row align-items-center">
        <div className="col-md-6 align-items-center">
          <h1 className='mb-5'>Окунитесь в мир
            лошадей вместе с нами</h1>
          <p className='mb-5'>Уроки верховой езды, фотосессии и мероприятия
            в частном конном клубе г. Санкт-Петербург</p>
          <button className="btn  py-3 px-5 btn-warning">записаться</button>
        </div>
        <div className='col-md-6'>
          <img src={horse} className=' horse-img' alt="" />
        </div>
      </div>
    </div>
</div>

  )
}
