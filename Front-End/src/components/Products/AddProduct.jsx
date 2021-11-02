import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import SideBar from '../SideBar/SideBar';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import "./Productos.css";
const initialValue = {
    valor: '',
    descripcion: '',
    estado: true,
}
export default function EditProduct() {

    const { id } = useParams();

    const [product, setProduct] = useState(initialValue);
    const { valor, descripcion, estado } = product;
    let history = useHistory();



    const onValueChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }
    const addProductData = async () => {
        await axios.post(`http://localhost:5000/Productos/`, product);
        //console.log(product);
        history.push('/Products');
    }



    return (
        <div class="Home">

            <div class="Navbar"><SideBar /></div>
            <div class="ContentEdit">
                <h5 class="titleProds">Agregar Productos</h5>
                <br />

                <Form.Label>Código de Barras</Form.Label>
                <Form.Control type="text" t placeholder="" />
                <br />
                <Form.Label>Nombre del Libro</Form.Label>
                <Form.Control onChange={(e) => onValueChange(e)} type="text" placeholder="Nombre del Libro" name="descripcion" value={descripcion} />
                <br />
                <Form.Label>Reseña</Form.Label>
                <Form.Control onChange={(e) => onValueChange(e)} type="text" placeholder="Reseña" />

                <br />
                <Form.Label>Valor de Venta</Form.Label>
                <Form.Control onChange={(e) => onValueChange(e)} type="text" placeholder="Valor de Venta" name="valor" value={valor} />

                <br />

                <Form.Select aria-label="Default select example" name="estado" >
                    <option >Disponibilidad</option>
                    <option value="true">Disponible</option>
                    <option value="false">No Disponible</option>
                </Form.Select>
                <br />

                <Button variant="secondary" onClick={() => history.push('/Products')}>Cancelar</Button>{' '}
                <Button id="btnGuardar" variant="success" onClick={(e) => addProductData()}>Agregar</Button>{' '}
            </div>
        </div>
    )
}
