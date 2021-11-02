import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { BsFillPlusSquareFill } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import "./Productos.css";
import SideBar from '../SideBar/SideBar';
import EditProduct from './EditProduct';
import { Link } from 'react-router-dom';
import { useHistory, useParams } from 'react-router-dom';


export default function Home() {

  const [respuestaAPI, setRespuestaAPI] = useState([])
  let history = useHistory();
  function getFullName(item) {
    return [item.firstname, item.lastname].join(" ");

  }


  useEffect(async () => {
    let response = await axios.get("http://localhost:5000/productos");
    console.log(response.data.data);
    setRespuestaAPI(response.data.data);

  });

  
  const deleteProductData = async (id) => {
    let callbackUser = window.confirm('Esta seguro de elimar el prudcto');
    if (callbackUser) {
        await axios.delete(`http://localhost:5000/productos/${id}`);
        
    }
}


  return <div class="Home">




    <div class="Navbar"><SideBar /></div>
    <div class="Content">
      <div>
        <Button id="BtnAddProd" variant="dark" size="sm" onClick={() => history.push('/ProductsAdd')} >
          Agregar Producto

        </Button>
        <Table striped bordered hover size="sm">

          <thead>
            <tr>
              <th>Código de Barras</th>
              <th>Nombre del Libro</th>
              <th>Reseña</th>
              <th>Valor de Venta</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>

            {
              respuestaAPI.map(item =>
                <tr>
                  <td>{item._id} </td>
                  <td>{item.descripcion} </td>
                  <td></td>
                  <td>$ {item.valor}</td>

                  <td>{item.estado ? 'Disponible' : 'Sin Existencia'}</td>
                  <td>
                    <Button variant="outline-primary"><BsFillPlusSquareFill /></Button>{' '}
                    <Link to={`/Products/${item._id}`}>
                      <Button variant="outline-dark" type="button"><BiEdit /></Button>{' '}
                    </Link>
                    <Button variant="outline-danger" onClick={() => deleteProductData(item._id)}><AiFillDelete /></Button>

                  </td>
                </tr>)
            }
          </tbody>
        </Table>
      </div>
    </div>
  </div>

};

