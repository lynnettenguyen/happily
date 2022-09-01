const GET_PRODUCTS = 'products/GET_PRODUCTS'
const FIND_PRODUCT = 'products/FIND_PRODUCT'
const ADD_PRODUCT = 'products/ADD_PRODUCT'
const EDIT_PRODUCT = 'products/EDIT_PRODUCT'
const DELETE_PRODUCT = 'products/DELETE_PRODUCT'

const GET_CATEGORIES = 'products/GET_CATEGORIES'

const getProducts = (product) => ({
  type: GET_PRODUCTS,
  product
})

const getCategories = (categories) => ({
  type: GET_CATEGORIES,
  categories
})

export const getAllProducts = () => async (dispatch) => {
  const response = await fetch(`/api/products`);

  if (response.ok) {
    const products = await response.json();
    dispatch(GET_PRODUCTS(products))
    return products;
  }
}

export const getAllCategories = () => async (dispatch) => {
  const response = await fetch(`/api/categories`);

  if (response.ok) {
    const products = await response.json();
    dispatch(GET_PRODUCTS(products))
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
