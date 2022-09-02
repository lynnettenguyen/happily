import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { findProductById, getAllProducts } from "../../store/products";
import '../CSS/ImageUpload.css'

const ImageUpload = ({ productId }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const user = useSelector(state => state.session.user)

  // console.log(productId)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("product_id", productId);
    formData.append("user_id", user.id)
    // aws uploads can be a bit slow—displaying
    // some sort of loading message is a good idea

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
      console.log("error");
    }
  }

  const updateImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  }

  return (<>
    <div>Photos</div>
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        accept=".png, .jpeg, .jpg, .gif, .webp"
        onChange={updateImage}
        // style={{display: 'none'}}
      />
      <button type="submit">Submit</button>
      {(imageLoading) && <p>Loading...</p>}
    </form>
  </>
  )
}

export default ImageUpload;
