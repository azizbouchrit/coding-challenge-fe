import React from "react";
import MoreIcon from "./icons/MoreIcon";
import MapContainer from "./MapContainer";
import "./OrderBody.css";

const OrderBody = ({ order }) => {
  return (
    <div className='order-details__body'>
      <ul className='progressbar'>
        <li
          className={
            [
              "PREPARING",
              "READY_FOR_PICKUP",
              "PICKED_UP",
              "EN_ROUTE",
              "DELIVERED",
            ].includes(order.status)
              ? "active"
              : "inactive"
          }
        >
          En preparation
        </li>
        <li
          className={
            ["READY_FOR_PICKUP", "PICKED_UP", "EN_ROUTE", "DELIVERED"].includes(
              order.status
            )
              ? "active"
              : "inactive"
          }
        >
          Prêt
        </li>
        <li
          className={
            ["PICKED_UP", "EN_ROUTE", "DELIVERED"].includes(order.status)
              ? "active"
              : "inactive"
          }
        >
          Emporté
        </li>
        <li className={order.status === "DELIVERED" ? "active" : "inactive"}>
          Livré
        </li>
      </ul>
      <div className='map-container'>
        <MapContainer order={order}/>
      </div>
      <div className='adresses'>
        <div>
          <div className='filled-circle' />
          <span>{order.restaurant && order.restaurant.fullAddress}</span>
        </div>
        <MoreIcon />
        <div>
          <div className='outlined-circle' />
          <span>{order.customer && order.customer.fullAddress}</span>
        </div>
      </div>
      <button className='btn'>Attribuer à un livreur ? </button>
    </div>
  );
};

export default OrderBody;
