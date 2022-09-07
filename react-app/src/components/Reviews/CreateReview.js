import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "../Context/modal";


const CreateReview = ({ addReview, setAddReview }) => {

  const handleReview = () => {

  }


  return (
    <>
      <Modal onClose={() => setAddReview(false)}>
        <form onSubmit={handleReview}>
          TEST
        </form>
      </Modal>
    </>
  )
}

export default CreateReview
