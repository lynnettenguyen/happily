import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { findProductById, getAllProducts } from "../../store/products";
import '../CSS/ImageUpload.css'
import photo from '../CSS/Images/photo.svg'
import deleteBin from '../CSS/Images/delete-image-bin.svg'

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
      setErrors(['Image is not a valid file type (.png, .jpeg, .jpg, .webp)'])
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
              <img src={image ? URL.createObjectURL(image) : photo} className={image ? 'photo-preview' : 'file-upload-image'}></img>
              {image ? <img src={deleteBin} className='delete-image-bin'></img> : 'Add Photo'}
            </label>
          </div>
          <div className="file-upload-outer">
            <label for='file-upload2' className="file-upload-label">
              <img src={image2 ? URL.createObjectURL(image) : photo} className={image2 ? 'photo-preview' : 'file-upload-image'}></img>{image2 ? 'Update/Remove Photo' : 'Add Photo'}
            </label>
          </div>
          <div className="file-upload-outer">
            <label for='file-upload3' className="file-upload-label">
              <img src={image3 ? URL.createObjectURL(image) : photo} className={image3 ? 'photo-preview' : 'file-upload-image'}></img>{image3 ? 'Update/Remove Photo' : 'Add Photo'}
            </label>
          </div>
          <div className="file-upload-outer">
            <label for='file-upload4' className="file-upload-label">
              <img src={image4 ? URL.createObjectURL(image) : photo} className={image4 ? 'photo-preview' : 'file-upload-image'}></img>{image4 ? 'Update/Remove Photo' : 'Add Photo'}
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
