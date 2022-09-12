import React, { useEffect, useState } from "react";
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
  const [multiImages, setMultiImage] = useState([])
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const user = useSelector(state => state.session.user)
  const [errors, setErrors] = useState([])
  const [brokenImage, setBrokenImage] = useState(false)
  const [brokenImage2, setBrokenImage2] = useState(false)
  const [brokenImage3, setBrokenImage3] = useState(false)
  const [brokenImage4, setBrokenImage4] = useState(false)

  useEffect(() => {
    if (image4) setMultiImage([image, image2, image3, image4])
    else if (image3) setMultiImage([image, image2, image3])
    else if (image2) setMultiImage([image, image2])
    else if (image) setMultiImage([image])
    else setMultiImage([])

    if (image || image2 || image3 || image4) setErrors([])

    if (brokenImage === true || brokenImage2 === true || brokenImage3 === true || brokenImage4 === true) setErrors(['Invalid image was uploaded. Please upload a different image'])
    else setErrors([])

  }, [image, image2, image3, image4, brokenImage, brokenImage2, brokenImage3, brokenImage4])

  console.log(errors)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (errors.length > 0) {
      return
    }

    if (multiImages.length === 0) {
      setErrors(['Minimum of one image upload required'])
      return
    }

    setImageLoading(true);
    for (let i = 0; i < multiImages.length; i++) {
      const imageData = new FormData();
      imageData.append("product_id", productId);
      imageData.append("user_id", user.id)
      imageData.append("image", multiImages[i]);
      await dispatch(uploadImages(imageData))
    }

    // for (let pair of imageData.entries()) {
    //   console.log(pair[0] + ': ' + pair[1]);
    // }

    setImageLoading(false);
    await dispatch(getAllProducts())
    const response = await dispatch(findProductById(productId))
    if (response) history.push(`/products/${productId}`)
  }

  const updateImage = (e) => {
    const file = e.target.files[0];
    setImage(file)
    setBrokenImage(false)
  }

  const updateImage2 = (e) => {
    const file = e.target.files[0];
    setImage2(file);
    setBrokenImage2(false);
  }
  const updateImage3 = (e) => {
    const file = e.target.files[0];
    setImage3(file);
    setBrokenImage3(false);
  }
  const updateImage4 = (e) => {
    const file = e.target.files[0];
    setImage4(file);
    setBrokenImage4(false);
  }

  return (
    <div className="upload-image-main">
      <div className="photo-header">Add Photos</div>
      <div className="photo-caption">Upload up to four photos to show your item's most important qualities. <span>*Only GIFs, JPEGs, JPGs, PNGs, SVGs, TIFFs, and WEBPs accepted.</span></div>
      <form onSubmit={handleSubmit}>
        <div className="photo-upload-main">
          <div className={image ? 'file-upload-outer-image' : 'file-upload-outer'}>
            <label for='file-upload' className='file-upload-label'>
              <img src={image ? URL.createObjectURL(image) : photo} className={image ? 'photo-preview' : 'file-upload-image'} alt='photo' onError={() => setBrokenImage(true)}></img>
              {image ?
                <div className="delete-image-outer">
                  <img src={whiteX} className='delete-image-x' alt='delete'></img>
                </div>
                : 'Add Photo'}
            </label>
          </div>
          {<div className={image2 ? 'file-upload-outer-image' : 'file-upload-outer'}>
            <label for='file-upload2' className='file-upload-label'>
              <img src={image2 ? URL.createObjectURL(image2) : photo} className={image2 ? 'photo-preview' : 'file-upload-image'} alt='photo' onError={() => setBrokenImage2(true)}></img>
              {image2 ?
                <div className="delete-image-outer">
                  <img src={whiteX} className='delete-image-x' alt='delete'></img>
                </div>
                : 'Add Photo'}
            </label>
          </div>}
          {<div className={image3 ? 'file-upload-outer-image' : 'file-upload-outer'}>
            <label for='file-upload3' className='file-upload-label'>
              <img src={image3 ? URL.createObjectURL(image3) : photo} className={image3 ? 'photo-preview' : 'file-upload-image'} alt='photo' onError={() => setBrokenImage3(true)}></img>
              {image3 ?
                <div className="delete-image-outer">
                  <img src={whiteX} className='delete-image-x' alt='delete'></img>
                </div>
                : 'Add Photo'}
            </label>
          </div>}
          {<div className={image4 ? 'file-upload-outer-image' : 'file-upload-outer'}>
            <label for='file-upload4' className='file-upload-label'>
              <img src={image4 ? URL.createObjectURL(image4) : photo} className={image4 ? 'photo-preview' : 'file-upload-image'} alt='photo' onError={() => setBrokenImage4(true)}></img>
              {image4 ?
                <div className="delete-image-outer">
                  <img src={whiteX} className='delete-image-x' alt='delete'></img>
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
          {errors?.map((error, i) => {
            return (
              <div key={i} className="image-error">*{error}</div>
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
