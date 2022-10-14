import React from "react";
import {Link} from "react-router-dom";
import {Button, Container, Navbar, Nav} from "react-bootstrap";

export default function NavComponent({favs}) {
  return (
    <Container className="sticky-top container-mobile">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="danger"
        variant="dark"
        className="p-3">
        <Container>
          <Link className="text-light marvel-logo mt-2" to="/">
            Marvel Comics Database
          </Link>
          <Link to="/favs">
            <Button
              type="button"
              className="btn btn-light position-relative mt-3">
              Favs
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                {favs.length}
              </span>
            </Button>
          </Link>
        </Container>
      </Navbar>
    </Container>
  );
}
