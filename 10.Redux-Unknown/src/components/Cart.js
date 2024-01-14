import React from 'react'
import Navbar from './Navbar'
import { Data } from '../data';
import formatCurrency from '../util';
import {useSelector, useDispatch} from 'react-redux';
function Cart() {


  const cart = useSelector((store) => store);
  console.log(cart);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <div className="cart">
        {
          Data.map(item => {
            return (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt="" />
                <div className="cart-item-text">
                  <div className="cart-item-info">
                    <h4>{item.title}</h4>
                    <h5>{formatCurrency(item.price)}</h5>
                  </div>

                  <div className="add-to-cart">
                    <button onClick={() => dispatch({ type: "ADD", payload: item })}>افزودن به سبد خرید</button>
                  </div>
                </div>

              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Cart