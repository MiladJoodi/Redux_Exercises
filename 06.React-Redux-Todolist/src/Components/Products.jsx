import React from 'react'
import { connect } from 'react-redux'
import { addProductAction } from './../Redux/store/Products'

function Products(props) {
  console.log("props: ", props)
  return (
    <>
      <ul>
        Product List:
        {
          props.products.map((product => (
            <li key={product.id}>{product.title}</li>
          )))
        }
      </ul>
      <button onClick={props.addProduct}>Add New Product</button>
    </>
  )
}

function mapStateToProps(state) {
  console.log('store', state);
  return {
    products: state.products,
    testParams: "Test Property"
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addProduct: () => dispatch(addProductAction({ id: 4, title: 'Pen', price: 30_000 }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
