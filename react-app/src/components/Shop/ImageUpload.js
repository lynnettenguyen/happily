import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux'

const ImageUpload = ({ productId }) => {
  const history = useHistory();
  const [image, setImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const user = useSelector(state => state.session.user)

  console.log(productId)

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
      history.push("/images");
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
    <h1>IMAGE UPLOAD FORM</h1>
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        accept="image/*"
        onChange={updateImage}
      />
      <button type="submit">Submit</button>
      {(imageLoading) && <p>Loading...</p>}
    </form>
  </>
  )
}

export default ImageUpload;
