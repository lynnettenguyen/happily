import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import '../CSS/ShopManager.css'
import { Modal } from '../Context/modal';
import { getAllPurchases } from "../../store/purchases";
import { getAllProducts } from "../../store/products";


const Purchases = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  const products = useSelector(state => state.products)
  const purchases = useSelector(state => Object.values(state.purchases))

  useEffect(() => {
    dispatch(getAllProducts())
    dispatch(getAllPurchases(user.id))
  }, [])

  const formatDate = (dateTime) => {
    let month = dateTime.split(" ")[2]
    let day = dateTime.split(" ")[1]
    if (day[0] === '0') day = day.slice(1)
    let year = dateTime.split(" ")[3]

    return `${month} ${day}, ${year}`
  }

  const generatedShipped = (dateTime) => {
    const date = new Date(dateTime)
    date.setDate(date.getDate() + 3);
    return (new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).format(date));
  }

  const generateDelivery = (dateTime) => {
    const date = new Date(dateTime)
    date.setDate(date.getDate() + 7);
    return (new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).format(date));
  }

  const convertTotal = (price) => {
    return price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  return (
    <>
      {purchases?.map((purchase, i) => {
        return (
          <div className="purchases-details-main">
            <div div className="purchases-details-left">
              <div className="purchases-upper-outer">
                <div className="purchase-shop-total">
                  <div className="purchase-shop-name">Purchased from {purchase?.shop_name} on {formatDate(purchase?.created_at)}</div>
                  <div className="purchase-item-total">This item was part of a ${convertTotal(purchase?.purchase_total*1.09125)} purchase.</div>
                </div>
                <div className="purchase-product-total">${convertTotal(purchase?.product_total*1.09125)}</div>
              </div>
              <div className="purchases-bottom-outer">
                <div className="purchase-product-img"></div>
                <div className="purchase-product-info">
                  <div className="purchase-product-name">{products[purchase.product_id]?.name}</div>
                  <div className="purchase-product-review-outer">
                    <div><button>Review this Item</button></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="purchase-shipping-details">
              <div>Shipped</div>
              <div>{generatedShipped(purchase?.created_at)}</div>
              <div>Estimated delivery: {generateDelivery(purchase?.created_at)}</div>
              <div className="order-receipt-outer">
                <div>Item Total</div>
                <div>{convertTotal(purchase?.product_total)}</div>
                <div>Shipping</div>
                <div>FREE</div>
                <div>Sales Tax</div>
                <div>{convertTotal(purchase?.product_total*0.09125)}</div>
                <div>Order Total</div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Purchases
