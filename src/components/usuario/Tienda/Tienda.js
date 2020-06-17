import React, { Fragment } from "react";
import { Row, Container } from "react-bootstrap";
import Producto from "./Producto";

const Tienda = () => {
  let productos = [
    {
      id: "1",
      nombre: "Alimento Perro Cachorro",
      precio: "2500",
      descripcion: "alimento para perros de entre 0 y 12 meses",
      agregado: false,
      cantidadAComprar: 0,
      esPromo: true,
      stock: 0,
    },
    {
      id: "2",
      nombre: "Alimento Gato Cachorro",
      precio: "2500",
      descripcion: "alimento para gatos de entre 0 y 12 meses",
      agregado: false,
      cantidadAComprar: 0,
      esPromo: true,
      stock: 1,
    },
    {
      id: "3",
      nombre: "Alimento Perro Adulto",
      precio: "3000",
      descripcion: "alimento para perros de entre 12 o mas años",
      agregado: false,
      cantidadAComprar: 0,
      esPromo: true,
      stock: 5,
    },
    {
      id: "4",
      nombre: "Alimento Conejo Cachorro",
      precio: "2000",
      descripcion: "alimento para conejo de entre 0 y 12 meses",
      agregado: false,
      cantidadAComprar: 0,
      esPromo: true,
      stock: 5,
    },
    {
      id: "5",
      nombre: "Alimento Conejo Adulto",
      precio: "2300",
      descripcion: "alimento para conejo de entre 0 y 12 meses",
      agregado: false,
      cantidadAComprar: 0,
      esPromo: true,
      stock: 5,
    },
    {
      id: "6",
      nombre: "Alimento Tortuga ",
      precio: "2100",
      descripcion: "alimento para tortuga",
      agregado: false,
      cantidadAComprar: 0,
      esPromo: true,
      stock: 5,
    },
    {
      id: "7",
      nombre: "Alimento Hamster Cachorro",
      precio: "3500",
      descripcion: "alimento para hamsters de entre 0 y 12 meses",
      agregado: false,
      cantidadAComprar: 0,
      esPromo: true,
      stock: 5,
    },
    {
      id: "8",
      nombre: "Alimento Hamsters Adulto",
      precio: "2010",
      descripcion: "alimento para hamsters de entre 12 o mas años",
      agregado: false,
      cantidadAComprar: 0,
      esPromo: true,
      stock: 5,
    },
    {
      id: "9",
      nombre: "Alimento Gato adulto",
      precio: "2300",
      descripcion: "alimento para gato adulto de 12 o mas años",
      agregado: false,
      cantidadAComprar: 0,
      esPromo: true,
      stock: 5,
    },
  ];

  return (
    <div>
      <Fragment>
        <Container>
          <Row className="col-12 m-auto">
            {productos.map((producto) => (
              <Producto key={producto.id} producto={producto} />
            ))}
          </Row>
        </Container>
      </Fragment>
    </div>
  );
};

export default Tienda;
