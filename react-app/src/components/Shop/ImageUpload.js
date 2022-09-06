import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { findProductById, getAllProducts } from "../../store/products";
import '../CSS/ImageUpload.css'
import photo from '../CSS/Images/photo.svg'
import whiteX from '../CSS/Images/white-x.svg'
import { uploadImages } from "../../store/images";

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
  const [imageCount, setImageCount] = useState(0)

  // console.log('image1', image)
  // console.log('image2', image2)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (image === null) {
      setErrors(['Minimum of one image upload required'])
      return
    }

    // if (image && !image2) {

      const imageData = new FormData();
      imageData.append("image", image);
      imageData.append("product_id", productId);
      imageData.append("user_id", user.id)

      setImageLoading(true);

      // console.log(imageData, "!!!!!!!!!!")

      const response = await dispatch(uploadImages(imageData))
      console.log("!!!!!!", response)
      if (response) {
        setImageLoading(false);
        await dispatch(getAllProducts())
        await dispatch(findProductById(productId))
        history.push(`/products/${productId}`)
      } else {
        setImageLoading(false);
        setErrors(['Image is not a valid file type (.png, .jpeg, .jpg)'])
      }
    // } else if (image && image2 && !image3) {

    //   const imageData = new FormData();
    //   imageData.append("image", image);
    //   imageData.append("product_id", productId);
    //   imageData.append("user_id", user.id)

    //   const imageData2 = new FormData();
    //   imageData.append("image", image2);
    //   imageData.append("product_id", productId);
    //   imageData.append("user_id", user.id)

    //   setImageLoading(true);

    //   console.log(imageData, "!!!!!!!!!!")
    //   console.log(imageData2,"22222222")

    //   const response = await dispatch(uploadImages(imageData))
    //   const response2 = await dispatch(uploadImages(imageData2))

    //   if (response && response2) {
    //     setImageLoading(false);
    //     await dispatch(getAllProducts())
    //     await dispatch(findProductById(productId))
    //     history.push(`/products/${productId}`)
    //   } else {
    //     setImageLoading(false);
    //     setErrors(['Image is not a valid file type (.png, .jpeg, .jpg)'])
    //   }
    // }
  }

  //   const res = await fetch('/api/images', {
  //     method: "POST",
  //     body: formData,
  //   });
  //   if (res.ok) {
  //     await res.json();
  //     setImageLoading(false);
  //     await dispatch(getAllProducts())
  //     const response = await dispatch(findProductById(productId))

  //     if (response) history.push(`/products/${productId}`);
  //   }
  //   else {
  //     setImageLoading(false);
  //     setErrors(['Image is not a valid file type (.png, .jpeg, .jpg)'])
  //   }
  // }

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
      <div className="photo-caption">Use up to four photos to show your item's most important qualities. *Only PNGs, JPEGs, and JPGs accepted.</div>
      <form onSubmit={handleSubmit}>
        <div className="photo-upload-main">
          <div className={image ? 'file-upload-outer-image' : 'file-upload-outer'}>
            <label for='file-upload' className='file-upload-label'>
              <img src={image ? URL.createObjectURL(image) : photo} className={image ? 'photo-preview' : 'file-upload-image'}></img>
              {image ?
                <div className="delete-image-outer">
                  <img src={whiteX} className='delete-image-x'></img>
                </div>
                : 'Add Photo'}
            </label>
          </div>
          {image && <div className={image2 ? 'file-upload-outer-image' : 'file-upload-outer'}>
            <label for='file-upload2' className='file-upload-label'>
              <img src={image2 ? URL.createObjectURL(image2) : photo} className={image2 ? 'photo-preview' : 'file-upload-image'}></img>
              {image2 ?
                <div className="delete-image-outer">
                  <img src={whiteX} className='delete-image-x'></img>
                </div>
                : 'Add Photo'}
            </label>
          </div>}
          {image && image2 && <div className={image3 ? 'file-upload-outer-image' : 'file-upload-outer'}>
            <label for='file-upload3' className='file-upload-label'>
              <img src={image3 ? URL.createObjectURL(image3) : photo} className={image3 ? 'photo-preview' : 'file-upload-image'}></img>
              {image3 ?
                <div className="delete-image-outer">
                  <img src={whiteX} className='delete-image-x'></img>
                </div>
                : 'Add Photo'}
            </label>
          </div>}
          {image && image2 && image3 && <div className={image4 ? 'file-upload-outer-image' : 'file-upload-outer'}>
            <label for='file-upload4' className='file-upload-label'>
              <img src={image4 ? URL.createObjectURL(image4) : photo} className={image4 ? 'photo-preview' : 'file-upload-image'}></img>
              {image4 ?
                <div className="delete-image-outer">
                  <img src={whiteX} className='delete-image-x'></img>
                </div>
                : 'Add Photo'}
            </label>
          </div>}
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
        {imageLoading && <div className="loading-outer">
          <p className="loading-message">Loading...</p>
        </div>}
        {errors && <div className="image-errors-outer">
          {errors?.map((error) => {
            return (
              <div className="image-error">*{error}</div>
            )
          })}
        </div>
        }
        <div className="image-upload-button-outer">
          <button type="submit" className='image-upload-button'>Upload</button>
        </div>
      </form >
    </div >
  )
}

export default ImageUpload;
