const GET_CATEGORIES = 'categories/GET_CATEGORIES'

export const allCategories = (state) => Object.values(state.categories)

const getCategories = (categories) => ({
  type: GET_CATEGORIES,
  categories
})

export const getAllCategories = () => async (dispatch) => {
  const response = await fetch(`/api/categories`);

  if (response.ok) {
    const categories = await response.json();
    dispatch(getCategories(categories))
    return categories;
  }
}


const categoryReducer = (state = {}, action) => {
  let newState = {}
  switch (action.type) {
    case GET_CATEGORIES: {
      for (let category of action.categories) newState[category.name.toLowerCase()] = category
      return newState
    }
    default:
      return state;
  }
}

export default categoryReducer
