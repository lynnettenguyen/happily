const GET_SHOP = 'reviews/GET_SHOP'
const EDIT_SHOP = 'reviews/EDIT_SHOP'

const getShop = (shop_name, shop) => ({
  type: GET_SHOP,
  shop_name,
  shop
})

const editShop = (shop_name, shop) => ({
  type: EDIT_SHOP,
  shop_name,
  shop
})


export const findShop = (shop_name) => async (dispatch) => {
  const response = await fetch(`/api/shop/${shop_name}`);

  if (response.ok) {
    const shop = await response.json();
    dispatch(getShop(shop_name, shop))
    return shop;
  }
}

export const updateShop = (shopData) => async (dispatch) => {
  const { shop_name, title, location, icon } = shopData;
  const response = await fetch(`/api/shop/${shop_name}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title, location, icon
    })
  })

  if (response.ok) {
    const shop = await response.json()
    dispatch(editShop(shop_name, shop));
    return shop;
  }
}


const shopReducer = (state = {}, action) => {
  let newState = {}
  switch (action.type) {
    case GET_SHOP: {
      for (let shop of action.shop) newState[action.shop_name] = shop
      return newState
    }
    case EDIT_SHOP: {
      newState = { ...state }
      newState[action.shop_name] = action.shop[0]
      return newState
    }
    default:
      return state;
  }
}

export default shopReducer
