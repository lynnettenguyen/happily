import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { findShop } from '../../store/shop';

const ProductsByShop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(findShop())
  },[])

  return (
    <>
      TEST
    </>
  )
}

export default ProductsByShop
