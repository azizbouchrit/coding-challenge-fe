import React from "react";
import OrderBody from "./OrderBody";
import OrderHeader from "./OrderHeader";
import "./OrderDetails.css";

const OrderDetails = ({ selectedOrder: order }) => {
  return (
    <div className='app__container order-details'>
      <OrderHeader order={order} />
      <div className='hr' />
      <OrderBody order={order} />
    </div>
  );
};

export default OrderDetails;
