import React from 'react'
import {connect} from 'react-redux'

function Products(props) {
  console.log("props: " , props)
  return (
    <ul>
        Product List:
        {
          props.products.map((product=> (
            <li>{product.title}</li>
          )))
        }
    </ul>
  )
}

function mapStateToProps(state){
    console.log('store', state);
    return {
      products: state.products
    }
}

export default connect(mapStateToProps)(Products);
