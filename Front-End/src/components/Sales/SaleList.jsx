import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import "./Sales.css";

export default function SaleList() {

    
    return (
        <div  className="Sales"> 
          <Table striped bordered hover size="sm">
                
                <thead>
                <tr>
                    <th>Factura No</th>
                    <th>Fecha Venta</th>
                    <th>DNI Cliente</th>
                    <th>Nº de Items</th>
                    <th>Valor Total</th>
                    <th>Operación</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>FE-001</td>
                    <td>29-09-2021</td>
                    <td>74186320</td>
                    <td>1</td>
                    <td>$ 35.000</td>
                    <td>                   
                        <Button variant="success">Productos</Button>{' '}
                        <Button variant="primary">Editar</Button>{' '}
                        <Button variant="danger">Eliminar</Button>{' '}
                    </td>                        
                    
                </tr>
                <tr>
                    <td>FE-003</td>
                    <td>01-10-2021</td>
                    <td>9523553-9</td>
                    <td>2</td>
                    <td>$340.000</td>
                    <td>                   
                        <Button variant="success">Productos</Button>{' '}
                        <Button variant="primary">Editar</Button>{' '}
                        <Button variant="danger">Eliminar</Button>{' '}
                    </td>                        

                </tr>
                <tr>
                    <td>FE-004</td>
                    <td>01-10-2021</td>
                    <td>74186320</td>
                    <td>3</td>
                    <td>$360.000</td>
                    <td>                   
                        <Button variant="success">Productos</Button>{' '}
                        <Button variant="primary">Editar</Button>{' '}
                        <Button variant="danger" >Eliminar</Button>{' '}
                    </td>                        

                </tr>
                </tbody>
                </Table>
                
        </div>
    )
}
