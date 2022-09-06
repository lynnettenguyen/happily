const LOAD_IMAGES = 'images/LOAD_IMAGES'
const ADD_IMAGE = 'images/ADD_IMAGE'
const DELETE_IMAGE = 'images/DELETE_IMAGE'

const loadImages = (images) => ({
  type: LOAD_IMAGES,
  images
})

const addImages = (newImage) => ({
  type: ADD_IMAGE,
  newImage
})

const deleteImages = (imageId) => ({
  type: DELETE_IMAGE,
  imageId
})

export const uploadImages = (imageData) => async (dispatch) => {
  const response = await fetch(`/api/images`, {
    method: "POST",
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
    body: imageData
  })

  if (response.ok) {
    const newImage = await response.json()
    dispatch(addImages(newImage));
    return newImage;
  }
}


const imageReducer = (state = {}, action) => {
  let newState = {}
  switch (action.type) {
    case LOAD_IMAGES: {
      for (let image of action.images) newState[image.id] = image
      return newState
    }
    case ADD_IMAGE: {
      newState = { ...state }
      newState[action.newImage.id] = action.newImage
      return newState
    }
    case DELETE_IMAGE: {
      newState = { ...state }
      delete newState[action.image.id]
      return newState
    }
    default:
      return state;
  }
}

export default imageReducer
