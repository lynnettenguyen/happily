import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { findProductById, getAllProducts } from "../../store/products";
import '../CSS/ImageUpload.css'

const ImageUpload = ({ productId }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const user = useSelector(state => state.session.user)
  const [errors, setErrors] = useState([])


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("product_id", productId);
    formData.append("user_id", user.id)

    setImageLoading(true);

    const res = await fetch('/api/images', {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      await res.json();
      setImageLoading(false);
      await dispatch(getAllProducts())
      const response = await dispatch(findProductById(productId))

      if (response) history.push(`/products/${productId}`);
    }
    else {
      setImageLoading(false);
      setErrors(['Image is not a valid file type (.png, .jpeg, .jpg)'])
    }
  }

  const updateImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  }
  const updateImage2 = (e) => {
    const file = e.target.files[0];
    setImage2(file);
  }
  const updateImage3 = (e) => {
    const file = e.target.files[0];
    setImage3(file);
  }
  const updateImage4 = (e) => {
    const file = e.target.files[0];
    setImage4(file);
  }

  return (<>
    <div>Photos</div>
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        accept="image/*"
        onChange={updateImage}
      />
      <input
        type="file"
        accept="image/*"
        onChange={updateImage2}
      />
      <input
        type="file"
        accept="image/*"
        onChange={updateImage3}
      />
      <input
        type="file"
        accept="image/*"
        onChange={updateImage4}
      />
      <img src={image ? URL.createObjectURL(image) : ""}></img>
      <img src={image2 ? URL.createObjectURL(image2) : ""}></img>
      <img src={image3 ? URL.createObjectURL(image3) : ""}></img>
      <img src={image4 ? URL.createObjectURL(image4) : ""}></img>
      <button type="submit">Submit</button>
      {(imageLoading) && <p>Loading...</p>}
      {errors?.map((error) => {
        return (
          <div>{error}</div>
        )
      })}
    </form>
  </>
  )
}

export default ImageUpload;
