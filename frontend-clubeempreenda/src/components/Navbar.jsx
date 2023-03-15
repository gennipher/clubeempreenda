import React from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import styles from "../styles/Navbar.module.scss";

export default () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand className={styles.navbarBrand} href="/">Clube Empreenda</Navbar.Brand>
          <Nav>
            <Nav.Link href="/sobre" >Sobre nós</Nav.Link>
            <Nav.Link href="/sobre">Entre</Nav.Link>
            <Nav.Link href="/sobre">Crie sua conta</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
};