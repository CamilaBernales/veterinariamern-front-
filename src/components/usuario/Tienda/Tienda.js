import React, { Fragment, useState, useEffect } from "react";
import {
  Row,
  Container,
  Col,
  Form,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";
import Producto from "./Producto";
import axiosConfig from "../../../config/axios";
import "./../../../css/Tienda.css";

const Tienda = (props) => {
  const { setComprasGuardadas } = props;
  const [productos, setProductos] = useState([]);
  const [filtrar, setFiltrar] = useState(false);
  const [filtrarNombre, setFiltrarNombre] = useState("");
  const [loading, setLoading] = useState(false);
  const [filtrarTipo, setFiltrarTipo] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const onChangeFiltroNombre = (e) => {
    setFiltrarNombre(e.target.value);
  };
  const onChangeFiltroTipos = (e) => {
    setFiltrarTipo(e.target.value);
  };

  const traerProductos = () => {
    axiosConfig
      .get(`/api/productos/listado?pagina=${currentPage}`)
      .then((res) => {
        setProductos(res.data.docs);
        setTotalPages(res.data.totalPages);
        setCurrentPage(res.data.page);
      })
      .catch((err) => console.log(err));
  };
  const filtrarProductos = (e) => {
    e.preventDefault();
    setFiltrar(true);
    if (
      (filtrarNombre === "" && filtrarTipo !== "") ||
      // (filtrarNombre !== "" && filtrarTipo === "") ||
      (filtrarNombre !== "" && filtrarTipo !== "")
    ) {
      axiosConfig
        .get(
          `/api/productos/productosfiltrados?nombre=${filtrarNombre}&&tipoproducto=${filtrarTipo}&&pagina=${currentPage}`
        )
        .then((res) => {
          setProductos(res.data.docs);
          setTotalPages(res.data.totalPages);
          setCurrentPage(res.data.page);
        })
        .catch((err) => console.log(err));
    } else {
      setCurrentPage(1);
      traerProductos();
    }
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
        Ver más
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
        Volver
      </button>
    );

  useEffect(() => {
    window.scrollTo(0, 200);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      traerProductos();
    }, 3000);
    // eslint-disable-next-line
  }, [currentPage]);

  return (
    <div>
      <Fragment>
        <Container className="my-5 py-3">
          <Form onSubmit={filtrarProductos}>
            <Row className="d-flex justify-content-around align-items-center">
              <Col sm={12} md={6} xl={4} lg={6} className="my-2">
                <Form.Group>
                  <Form.Control
                    onChange={onChangeFiltroNombre}
                    type="text"
                    placeholder="Busca algo"
                  />
                </Form.Group>
              </Col>
              <Col sm={12} md={6} xl={4} lg={6} className="my-2">
                <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Control
                    as="select"
                    name="tipoproducto"
                    className="w-100"
                    onChange={onChangeFiltroTipos}
                    custom
                  >
                    <option value="" defaultValue>
                      Elige el tipo de producto
                    </option>
                    <option value="alimento">Alimentos</option>
                    <option value="jueguete">Jueguetes</option>
                    <option value="accesorios">Accesorios</option>
                    <option value="Higiene">Productos de Higiene</option>
                    <option value="">Todos los productos</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col
                sm={12}
                md={4}
               
                className="mt-2 mb-4 d-flex"
              >
                <Button
                  onClick={filtrarProductos}
                  className="boton-search buscar"
                >
                  Buscar
                </Button>
              </Col>
            </Row>
          </Form>
          <Row className="mt-4 mb-4 d-flex justify-content-center align-items-center">
            {loading ? (
              <>
                <Spinner animation="grow" variant="info" />
                <Spinner animation="grow" variant="info" />
                <Spinner animation="grow" variant="info" />
              </>
            ) : null}
          </Row>
          <Row className="col-12 m-auto">
            {productos.length === 0 && !loading && filtrar ? (
              <Row className="m-auto my-4">
                <Alert className="text-center" variant="warning">
                  <h6>
                    {" "}
                    No hay resultados para mostrate{" "}
                    <span role="img" aria-label="cara triste">
                      &#128546;
                    </span>{" "}
                  </h6>
                </Alert>
              </Row>
            ) : (
              <>
                {productos.map((producto) => (
                  <Producto
                    key={producto._id}
                    producto={producto}
                    setComprasGuardadas={setComprasGuardadas}
                  />
                ))}
              </>
            )}
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
            <div className="text-center my-4 mx-1">{volver()}</div>
            <div className="text-center my-4 mx-1">{verMas()}</div>
          </Row>
        </Container>
      </Fragment>
    </div>
  );
};

export default Tienda;
