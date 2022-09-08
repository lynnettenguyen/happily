const GET_PRODUCTS = 'products/GET_PRODUCTS'
const FIND_PRODUCT = 'products/FIND_PRODUCT'
const LOAD_PRODUCTS_BY_OWNER = 'products/LOAD_PRODUCTS_BY_OWNER'
const LOAD_PRODUCTS_BY_CATEGORY = 'products/LOAD_PRODUCTS_BY_CATEGORY'
const ADD_PRODUCT = 'products/ADD_PRODUCT'
const EDIT_PRODUCT = 'products/EDIT_PRODUCT'
const DELETE_PRODUCT = 'products/DELETE_PRODUCT'
const SEARCH_PRODUCT = 'products/SEARCH_PRODUCT'

const getProducts = (products) => ({
  type: GET_PRODUCTS,
  products
})

const findProduct = (product) => ({
  type: FIND_PRODUCT,
  product
})

const loadProductByOwners = (products) => ({
  type: LOAD_PRODUCTS_BY_OWNER,
  products
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

// const searchProduct = (products) => ({
//   type: SEARCH_PRODUCT,
//   products
// })

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

export const findProductsBySearch = (keyword) => async (dispatch) => {
  const response = await fetch(`/api/search/${keyword}`)

  if (response.ok) {
    const products = await response.json()
    dispatch(loadProductsByCategory(products))
    return products;
  }
}


export const loadProductsByOwner = (sellerId) => async (dispatch) => {
  const response = await fetch(`/api/users/${sellerId}/products`)

  if (response.ok) {
    const products = await response.json()
    dispatch(loadProductByOwners(products))
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
  const { product_id, category, name, price, description } = productData;
  const response = await fetch(`/api/products/${product_id}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      product_id, category, name, price, description
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
    // case SEARCH_PRODUCT: {
    //   for (let product of action.products) newState[product.id] = product
    //   return newState
    // }
    case LOAD_PRODUCTS_BY_OWNER: {
      for (let product of action.products) newState[product.id] = product
      return newState
    }
    case ADD_PRODUCT: {
      newState = { ...state }
      newState[action.newProduct.id] = action.newProduct
      return newState
    }
    case EDIT_PRODUCT: {
      newState = { ...state }
      newState[action.product[0].id] = action.product[0]
      return newState
    }
    case DELETE_PRODUCT: {
      newState = { ...state }
      delete newState[action.productId]
      return newState
    }
    default:
      return state;
  }
}

export default productsReducer
