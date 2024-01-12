import React from 'react'
import {connect} from 'react-redux'

function Products() {
  return (
    <ul>
        Product List:
        <li>Product 1</li>
        <li>Product 2</li>
    </ul>
  )
}

export default connect()(Products);
