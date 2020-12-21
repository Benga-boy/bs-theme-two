import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap'
import { images } from '../../images/export'

const NavbarTop = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)



  return (
    <Navbar expand="md" fixed="top" light={true} color="light" className="py-4 navbar">
      <Container>
        <NavbarBrand href="#home">
          <img width="50" height="50" src={images[0].value.default} alt="Mizuxe"/>
          <h3 className="d-inline align-middle">Mizuxe</h3>
        </NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse navbar isOpen={isOpen}>
          <Nav className="ml-auto" navbar>
            <NavItem className="nav-item">
              <NavLink href="#home">Home</NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink href="#about">About</NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink href="#authors">Meet The Authors</NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink href="#contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarTop
