import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import SideBar from '../SideBar/SideBar';
import { useHistory, useParams } from 'react-router-dom';

import axios from 'axios';
import "./Productos.css";
export default function EditProduct() {

    const { id } = useParams();
    const [product, setProduct] = useState([])
    const { valor, descripcion, estado } = product;
    let history = useHistory();




    useEffect(async () => {
        let response = await axios.get(`http://localhost:5000/Productos/${id}`);
        console.log(response.data.data);
        setProduct(response.data.data);

    }, []);
    const updateProductData = async () => {
        await axios.put(`http://localhost:5000/Productos/${id}`, product);
        history.push('/Products');
    }

    const onValueChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }



    return (
        <div class="Home">
            <div class="Navbar"><SideBar /></div>
            <div class="ContentEdit">
                <Form.Label>Código de Barras</Form.Label>
                <Form.Control type="text" t placeholder="" value={id} />
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
                <Form.Select aria-label="Default select example">
                    <option>Disponibilidad</option>
                    <option value="1">Disponible</option>
                    <option value="2">No Disponible</option>
                </Form.Select>
                <br />

                <Button variant="secondary" onClick={() => history.push('/Products')}>Cancelar</Button>{' '}
                <Button id="btnGuardar" variant="success" onClick={() => updateProductData()}>Guardar</Button>{' '}
            </div>
        </div>
    )
}
