import React from 'react'
import { useState } from 'react'
import "./Sales.css";

import SideBar from '../SideBar/SideBar';



export default function Sale() {

    const [show, setShow] = useState(false);

    return (
        <div className="Sales">
            <div class="Navbar"><SideBar /></div>
            <div class="tittleSection"><h4>VENTAS</h4></div>

        </div>



    )



}
