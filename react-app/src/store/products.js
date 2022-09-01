const GET_PRODUCTS = 'products/GET_PRODUCTS'
const FIND_PRODUCT = 'products/FIND_PRODUCT'
const ADD_PRODUCT = 'products/ADD_PRODUCT'
const EDIT_PRODUCT = 'products/EDIT_PRODUCT'
const DELETE_PRODUCT = 'products/DELETE_PRODUCT'

const getProducts = (product) => ({
  type: GET_PRODUCTS,
  product
})

const findProduct = (productId) => ({
  type: FIND_PRODUCT,
  productId
})

const addProduct = (newProduct) => ({
  type: ADD_PRODUCT,
  newProduct
})
const editProduct = (product) => ({
  type: EDIT_PRODUCT,
  product
})
const deleteProduct = (productId) => ({
  type: DELETE_PRODUCT,
  productId
})


export const getAllProducts = () => async (dispatch) => {
  const response = await fetch(`/api/products`);

  if (response.ok) {
    const products = await response.json();
    dispatch(getProducts(products))
    return products;
  }
}


const productsReducer = (state = {}, action) => {
  let newState = {}
  switch (action.type) {
    case GET_PRODUCTS: {
      for (let product of action.products) newState[product.id] = product
      return newState
    }
    default:
      return state;
  }
}

export default productsReducer
