import './App.css'
//botstreapni css
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
//componentalar
import MainNavbar from './components/MainNavbar';
import Baner from './components/banner'
import AboutClub from './components/AboutClub';
import NegaTanlashdi from './components/NegaTanlashdi';
import Club from './components/Club';
import Sayoh from './components/Sayoh';
import BizningOtlarimiz from './components/BizningOtlarimiz';
import SavolarTop from './components/SavolarTop';
function App() {
  return (
    <div>
     <div className='backrasm '>
      <MainNavbar />
      <Baner />
     </div>
     <div>
      <AboutClub/>
     </div>
     <div>
      <NegaTanlashdi/>
     </div>
     <div>
      <Club/>
     </div>
     <div>
      <Sayoh/>
     </div>
     <div>
      <BizningOtlarimiz/>
     </div>
     <div className='backrasm-uchinchi'>
      <SavolarTop/>
     </div>
    </div>
    
  )
}

export default App
