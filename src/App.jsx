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
function App() {
  return (
    <div>
     <div className='backrasm '>
     <Navbar />
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
    </div>
    
  )
}

export default App
