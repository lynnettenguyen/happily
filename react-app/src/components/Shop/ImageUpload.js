import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { findProductById, getAllProducts } from "../../store/products";
import '../CSS/ImageUpload.css'
import photo from '../CSS/Images/photo.svg'

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

  return (
    <div className="upload-image-main">
      <div className="photo-header">Add Photos</div>
      <div className="photo-caption">Use up to four photos to show your item's most important qualities.</div>
      <form onSubmit={handleSubmit}>
        <div className="photo-upload-main">
          <div className="file-upload-outer">
            <label for='file-upload' className="file-upload-label">
              <img src={photo} className='file-upload-image'></img>Add a Photo
            </label>
          </div>
          <div className="file-upload-outer">
            <label for='file-upload2' className="file-upload-label">
              <img src={photo} className='file-upload-image'></img>Add a Photo
            </label>
          </div>
          <div className="file-upload-outer">
            <label for='file-upload3' className="file-upload-label">
              <img src={photo} className='file-upload-image'></img>Add a Photo
            </label>
          </div>
          <div className="file-upload-outer">
            <label for='file-upload4' className="file-upload-label">
              <img src={photo} className='file-upload-image'></img>Add a Photo
            </label>
          </div>
        </div>
        <input
          id='file-upload'
          type="file"
          accept="image/*"
          onChange={updateImage}
          style={{ display: 'none' }}
        />
        <input
          id='file-upload2'
          type="file"
          accept="image/*"
          onChange={updateImage2}
          style={{ display: 'none' }}
        />
        <input
          id='file-upload3'
          type="file"
          accept="image/*"
          onChange={updateImage3}
          style={{ display: 'none' }}
        />
        <input
          id='file-upload4'
          type="file"
          accept="image/*"
          onChange={updateImage4}
          style={{ display: 'none' }}
        />
        <div className="photo-display-preview">
          <img src={image ? URL.createObjectURL(image) : ""} className='photo-preview'></img>
          <img src={image2 ? URL.createObjectURL(image2) : ""} className='photo-preview'></img>
          <img src={image3 ? URL.createObjectURL(image3) : ""} className='photo-preview'></img>
          <img src={image4 ? URL.createObjectURL(image4) : ""} className='photo-preview'></img>
        </div>
        <button type="submit">Submit</button>
        {(imageLoading) && <p>Loading...</p>}
        {errors?.map((error) => {
          return (
            <div>{error}</div>
          )
        })}
      </form>
    </div>
  )
}

export default ImageUpload;
