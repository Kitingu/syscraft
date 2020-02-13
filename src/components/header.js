// import { Link } from "gatsby"
import {
  Navbar,
  Nav,
  NavDropdown,
  ButtonToolbar,
  Button,
} from "react-bootstrap"
import Enquiry from "./enquiry"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => {
  const [modalShow, setModalShow] = React.useState(false)
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">About </Nav.Link>
          <Nav.Link href="#pricing">Hardware</Nav.Link>
          <Nav.Link href="#pricing">Patners</Nav.Link>
          <Nav.Link href="#pricing">Services</Nav.Link>
          <Nav.Link href="#pricing">Contact Us</Nav.Link>
          <NavDropdown title="Software" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Newgen</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Hodusoft</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Emudhra</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Encore Theme</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <ButtonToolbar>
            <Button variant="primary" onClick={() => setModalShow(true)}>
              Enquiry
            </Button>

            <Enquiry show={modalShow} onHide={() => setModalShow(false)} />
          </ButtonToolbar>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
