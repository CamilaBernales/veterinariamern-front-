import React, { Fragment, useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import TablaPedidos from "./TablaPedidos";
import axiosConfig from "../../../config/axios";

export default function PedidosAdmin() {
  const [loading, setLoading] = useState(false);
  const [compras, setCompras] = useState([]);
  const [clienteFiltro, setClienteFiltro] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleClienteFiltro = (e) => {
    setClienteFiltro(e.target.value);
  };
  const filtrarPedidos = () => {
    axiosConfig
      .get(
        `/api/compra/filtrocompras?nombre=${clienteFiltro}&&pagina=${currentPage}`
      )
      .then((res) => {
        setCompras(res.data.docs);
        setTotalPages(res.data.totalPages);
      })
      .catch((err) => console.log(err.response));
  };
  const listarPedidos = () => {
    axiosConfig
      .get(`/api/compra/listado?pagina=${currentPage}`)
      .then((res) => {
        console.log(res);
        setCompras(res.data.docs);
        setTotalPages(res.data.totalPages);
      })
      .catch((err) => console.log(err.response));
  };

  const verMas = () =>
    totalPages > currentPage &&
    !loading && (
      <button
        className="btn btn-info"
        onClick={() => {
          setCurrentPage(currentPage + 1);
        }}
      >
        Ver más{" "}
      </button>
    );
  const volver = () =>
    totalPages >= currentPage &&
    currentPage !== 1 &&
    !loading && (
      <button
        className="btn btn-info"
        onClick={() => {
          setCurrentPage(currentPage - 1);
        }}
      >
        Volver{" "}
      </button>
    );
  useEffect(() => {
    window.scrollTo(0, 200);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      listarPedidos();
    }, 3000);
    // eslint-disable-next-line
  }, [currentPage]);

  return (
    <Fragment>
      <Container className="my-5">
        {" "}
        <Form.Row className="d-flex justify-content-center align-items-center text-start my-5">
          <Col sm={12} md={6} className="my-2">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Nombre del cliente"
                onChange={handleClienteFiltro}
              />{" "}
            </Form.Group>{" "}
          </Col>{" "}
          <Col sm={12} md={4} className="my-2">
            <Button className="mx-2" onClick={filtrarPedidos} variant="info">
              Buscar{" "}
            </Button>{" "}
          </Col>{" "}
        </Form.Row>{" "}
        {!loading ? (
          <>
            <Row className="d-flex justify-content-center align-items-center text-start my-5">
              <TablaPedidos compras={compras} />{" "}
            </Row>{" "}
          </>
        ) : (
          <Row className="mt-4 mb-4 d-flex justify-content-center align-items-center">
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="info" />
          </Row>
        )}{" "}
        <Row className="d-flex justify-content-center align-items-center">
          <div className="text-center my-4 mx-1"> {volver()} </div>{" "}
          <div className="text-center my-4 mx-1"> {verMas()} </div>{" "}
        </Row>{" "}
      </Container>{" "}
    </Fragment>
  );
}
