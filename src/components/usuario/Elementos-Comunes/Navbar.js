import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../css/Navbar.css";
import tokenAuth from "../../../config/token";
import PreCarrito from "./PreCarrito";
import BotonInicioSesion from "./BotonInicioSesion";
// import imagenHome from "../Elementos-Comunes/ImagenHome"

const NavBar = ({ comprasGuardadas, setComprasGuardadas, respuesta }) => {
  const [isLogIn, setIsLogIn] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const onHide = () => {
    setModalShow(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const revisarSesion = () => {
      if (token) {
        tokenAuth(token);
        setIsLogIn(true);
      } else {
        setIsLogIn(false);
      }
    };
    revisarSesion();
  }, []);

  return (
    <>
      <Navbar className="navbar navlink" collapseOnSelect expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand href="/">Huellitas</Navbar.Brand>
        {!respuesta.isAdmin ? (
          <>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="navlink m-auto ">
                <Nav.Link className="btn-navbar" href="/">
                  Inicio
                </Nav.Link>
                {isLogIn ? (
                  <NavDropdown
                    className="btn-navbar"
                    title="Turnos"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="/turno">
                      Solicitar Turno
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/misturnos">
                      Mis Turnos
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <Nav.Link className="btn-navbar" href="/login">
                    Turnos
                  </Nav.Link>
                )}
                <Nav.Link className="btn-navbar" href="/tienda">
                  Tienda
                </Nav.Link>
                {isLogIn ? (
                  <Nav.Link className="btn-navbar" href="/miscompras">
                    Tus Compras
                  </Nav.Link>
                ) : null}
                <Nav.Link className="btn-navbar" href="/equipo">
                  Nuestro Equipo
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Brand onClick={() => setModalShow(true)}>
              {" "}
              <i className="fas fa-cart-plus fa-1x" />
              <span>{comprasGuardadas}</span>
            </Navbar.Brand>
          </>
        ) : (
          <>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className=" navlink ml-auto ">
                <Link to="/admin/pedidos" className="nav-link">
                  Pedidos
                </Link>
                <NavDropdown title="Turnos" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/admin/turnos">
                    Listado de turnos
                  </NavDropdown.Item>
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
          </>
        )}
        <BotonInicioSesion />
      </Navbar>
      <Col>
        <PreCarrito
          modalShow={modalShow}
          setModalShow={setModalShow}
          onHide={onHide}
          setComprasGuardadas={setComprasGuardadas}
          comprasGuardadas={comprasGuardadas}
          isLogIn={isLogIn}
        />
      </Col>
    </>
  );
};

export default NavBar;
