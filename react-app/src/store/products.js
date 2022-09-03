const GET_PRODUCTS = 'products/GET_PRODUCTS'
const FIND_PRODUCT = 'products/FIND_PRODUCT'
const LOAD_PRODUCTS_BY_CATEGORY = 'products/LOAD_PRODUCTS_BY_CATEGORY'
const ADD_PRODUCT = 'products/ADD_PRODUCT'
const EDIT_PRODUCT = 'products/EDIT_PRODUCT'
const DELETE_PRODUCT = 'products/DELETE_PRODUCT'

const getProducts = (products) => ({
  type: GET_PRODUCTS,
  products
})

const findProduct = (product) => ({
  type: FIND_PRODUCT,
  product
})

const loadProductsByCategory = (products) => ({
  type: LOAD_PRODUCTS_BY_CATEGORY,
  products
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

export const findProductById = (productId) => async (dispatch) => {
  const response = await fetch(`/api/products/${productId}`)

  if (response.ok) {
    const product = await response.json()
    dispatch(findProduct(product))
    return product;
  }
}

export const findProductsByCategory = (category) => async (dispatch) => {
  const response = await fetch(`/api/categories/${category}`)

  if (response.ok) {
    const product = await response.json()
    dispatch(loadProductsByCategory(product))
    return product;
  }
}

export const loadProductsByOwner = (sellerId) => async (dispatch) => {
  const response = await fetch(`/api/users/${sellerId}/products`)

  if (response.ok) {
    const products = await response.json()
    dispatch(getProducts(products))
    return products;
  }
}

export const addNewProduct = (productData) => async (dispatch) => {
  const { sellerId, category, name, price, description } = productData;
  const response = await fetch(`/api/products`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      sellerId, category, name, price, description
    })
  })

  if (response.ok) {
    const newProduct = await response.json()
    dispatch(addProduct(newProduct));
    return newProduct;
  }
}

export const updateProduct = (productData) => async (dispatch) => {
  const { id, sellerId, category, name, price, description, updatedAt } = productData;
  const response = await fetch(`/api/products/${id}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      sellerId, category, name, price, description, updatedAt
    })
  })

  if (response.ok) {
    const product = await response.json()
    dispatch(editProduct(product));
    return product;
  }
}

export const removeProduct = (productId) => async (dispatch) => {
  const response = await fetch(`/api/products/${productId}`, {
    method: "DELETE"
  })

  if (response.ok) {
    const product = await response.json();
    dispatch(deleteProduct(productId))
    return product;
  }
}


const productsReducer = (state = {}, action) => {
  let newState = {}
  switch (action.type) {
    case GET_PRODUCTS: {
      newState = { ...state }
      for (let product of action.products) newState[product.id] = product
      return newState
    }
    case FIND_PRODUCT: {
      newState = { ...state }
      newState[action.product[0].id] = action.product[0]
      return newState
    }
    case LOAD_PRODUCTS_BY_CATEGORY: {
      for (let product of action.products) newState[product.id] = product
      return newState
    }
    case ADD_PRODUCT: {
      newState[action.newProduct.id] = action.newProduct
      return { ...state, ...newState }
    }
    case EDIT_PRODUCT: {
      newState[action.product.id] = action.product
      return { ...state, ...newState }
    }
    case DELETE_PRODUCT: {
      delete newState[action.productId]
      return { ...state, ...newState }
    }
    default:
      return state;
  }
}

export default productsReducer
