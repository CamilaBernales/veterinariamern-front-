import React, { Fragment, useState } from "react";
import imagen from "../../../img/logoprueba.png";
import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import Logo from "../../../components/usuario/Elementos-Comunes/Logo";
const NavBar = () => {
  const salir = () => {
    localStorage.clear();
    window.location.reload(true);
  };

  return (
    <Fragment>
      <Logo />
      <Navbar className="navbar" collapseOnSelect expand="lg">
        <Navbar.Brand href="/">Huellitas</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className=" navlink ml-auto ">
            <Link to="/admin/pedidos" className="nav-link">
              Pedidos
            </Link>
            <NavDropdown title="Turnos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/admin/turnos">
                Listado de turnos
              </NavDropdown.Item>
              <NavDropdown.Item href="/turno">Crear un turno</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/admin/altaproducto">
                Alta de Producto
              </NavDropdown.Item>
              <NavDropdown.Item href="/admin/productos">
                Listado de Productos
              </NavDropdown.Item>
            </NavDropdown>
            <Link to="/admin/listadousuarios" className="nav-link">
              Usuarios
            </Link>
            <Link to="/admin/listadomensajes" className="nav-link">
              Mensajes
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <Navbar className="d-flex justify-content-center " bg="warning">
          <Nav>
            <Link to="/admin/pedidos" className="nav-link">Pedidos</Link>
            <Link to="/admin/turnos" className="nav-link">Turnos</Link>
            <Link to="/admin/productos" className="nav-link">Productos</Link>
            <Link to="/admin/listadousuarios" className="nav-link">Usuarios</Link>
          </Nav>
        </Navbar> */}
    </Fragment>
  );
};

export default NavBar;
