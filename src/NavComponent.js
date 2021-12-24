import React from "react"
import {Link} from "react-router-dom"
import {Button, Container, Navbar, Nav} from "react-bootstrap"

export default function NavComponent({favs}) {
  return (
    <Container>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        className="pt-3">
        <Container>
          <Link className="text-light marvel-logo" to="/">
            Marvel Comics Database
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/favs">
                <Button
                  type="button"
                  className="btn btn-warning position-relative ms-5">
                  Favs
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {favs.length}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  )
}
