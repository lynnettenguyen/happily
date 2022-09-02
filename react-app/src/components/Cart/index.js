import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useHistory } from "react-router-dom";

const Cart = () => {

  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)


  return (
    <>
      Cart
    </>
  )
}

export default Cart
