const LOAD_IMAGES = 'images/LOAD_IMAGES'

const getCategories = (categories) => ({
  type: LOAD_IMAGES,
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


const imageReduce = (state = {}, action) => {
  let newState = {}
  switch (action.type) {
    case LOAD_IMAGES: {
      for (let category of action.categories) newState[category.id] = category
      return newState
    }
    default:
      return state;
  }
}

export default imageReduce
