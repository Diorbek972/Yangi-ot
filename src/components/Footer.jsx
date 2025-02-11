//botstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//images
import logo from "../assets/foto/logo-2.png"

//icons
import { FaPhoneAlt } from "react-icons/fa";
export default function Footer() {
  return (
    <div container>
      <Navbar collapseOnSelect expand="lg" className="bg-dark py-3">
      <Container className=' align-items-center my-auto'>
        <Navbar.Brand href="#home"><img src={logo} alt="" className='img-fluid'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='text-light' href="#features">О нас  </Nav.Link>
            <Nav.Link className='text-light' href="#pricing">Услуги и цены</Nav.Link>
            <Nav.Link className='text-light' href="#pricing">Фотоальбом</Nav.Link>
            <Nav.Link className='text-light' href="#pricing">Контакты</Nav.Link>
           <button class="btn btn-outline-warning">Заказать звонок</button>
          </Nav>
          <Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
