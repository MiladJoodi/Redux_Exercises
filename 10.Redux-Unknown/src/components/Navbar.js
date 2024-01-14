import React from 'react'
import {Link} from 'react-router-dom';
import { IoBasketOutline, IoHomeSharp } from "react-icons/io5";

function Navbar() {
  return (
     <>
        <nav>
             <Link to="/cart">
                    <IoBasketOutline />
             </Link>
             <Link to="/">   
               <IoHomeSharp />
             </Link>
        </nav>
        <div className="products">
             
          </div>  
    </>
  )
}

export default Navbar