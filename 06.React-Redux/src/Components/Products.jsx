import React from 'react'
import {connect} from 'react-redux'

function Products(props) {
  return (
    <ul>
        Product List:
        <li>Product 1</li>
        <li>Product 2</li>
    </ul>
  )
}

function mapStateToProps(state){
    console.log('store', state);
    return {}
}

export default connect(mapStateToProps)(Products);
