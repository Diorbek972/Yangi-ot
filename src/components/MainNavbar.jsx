
//botstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//images
import logo from "../assets/foto/logo.png"

//icons
import { FaPhoneAlt } from "react-icons/fa";

function MainNavbar(props) {
    return (
        <div>
              <Navbar collapseOnSelect expand="lg" className="">
      <Container className=' align-items-center'>
        <Navbar.Brand href="#home"><img src={logo} alt="" className='img-fluid'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features">О нас  </Nav.Link>
            <Nav.Link href="#pricing">Услуги и цены</Nav.Link>
            <Nav.Link href="#pricing">Фотоальбом</Nav.Link>
            <Nav.Link href="#pricing">Контакты</Nav.Link>
            <Nav.Link href="totel: +998338851912"><FaPhoneAlt className='icons'/>+998338851912</Nav.Link>
          </Nav>
          <Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
}
                          
export default MainNavbar;