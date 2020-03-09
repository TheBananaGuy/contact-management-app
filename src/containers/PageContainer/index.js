import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PageContainer = props => {
  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Link className="navbar-brand" to="/">
            Halvaa OÜ
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/contacts">
                Contact management
              </Link>
              <Link className="nav-link" to="/about">
                About
              </Link>
              <Link className="nav-link" to="/temp">
                Temp
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>{props.children}</Container>
    </>
  );
};

PageContainer.propTypes = {
  children: PropTypes.any,
};

export default PageContainer;
