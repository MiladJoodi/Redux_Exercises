// Actions
const addProduct = "ADD_PRODUCT";
const removeProduct = "REMOVE_PRODUCT";

const getProductsStart = "GET_PRODUCTS_START";
const getProductsSuccess = "GET_PRODUCTS_SUCCESS";
const getProductsError = "GET_PRODUCTS_ERROR";

// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    case addProduct: {
      let newProduct = action.payload;
      return [...state, newProduct];
    }
    case removeProduct: {
      const newState = [...state].filter((product) => product.id !== action.id);
      return newState;
    }
    case getProductsSuccess: {
      return [...state, ...action.payload];
    }
    case getProductsError: {
      return [...state, { error: action.payload }];
    }
    default: {
      return state;
    }
  }
}

// Action Creators

export const addProductAction = (data) => {
  return {
    type: addProduct,
    payload: data,
  };
};

export const removeProductAction = (id) => {
  return {
    type: removeProduct,
    id,
  };
};

export const getProductsStartAction = (url) => {
  return {
    type: getProductsStart,
    payload: url,
  };
};

export const getProductsSuccessAction = (data) => {
  return {
    type: getProductsSuccess,
    payload: data,
  };
};

export const getProductsErrorAction = (error) => {
  return {
    type: getProductsError,
    payload: error,
  };
};
