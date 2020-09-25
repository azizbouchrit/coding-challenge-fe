import React from "react";
import PhoneIcon from "./icons/PhoneIcon";
import MoreIcon from "./icons/MoreIcon";

const OrderHeader = ({ order }) => {
  const orderPrice = (orderItems) => {
    let price = 0;
    orderItems && orderItems.map((item) => (price += item.price)) ;
    return price;
  };

  return (
    <div className='order-details__header'>
      <div className='order-details__ref'>
        <img
          src='https://files-bocui07th.vercel.app/download%20(1).png'
          alt='brand logo'
          className='brand-logo'
        />
        <h3>Commande #{order.reference}</h3>
      </div>
      <div className='order-details__items'>
        {order.orderItems ? order.orderItems.length : 0} items
      </div>
      <div className='order-details__price'>
        {orderPrice(order.orderItems)} TND
      </div>
      <div className='order-details__restaurant'>
        <div className='h5'>Restaurant</div>
        <div className='text-brown'>{order.restaurant && order.restaurant.name}</div>
      </div>
      <div className='order-details__time'>
        <div className='h5'>A livrer en</div>
        <div className='text-brown'>
          32 min{" "}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='#724A20'
            width='18px'
            height='18px'
          >
            <path d='M0 0h24v24H0z' fill='none' />
            <path d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z' />
          </svg>
        </div>
      </div>
      <div className='phone-icon pointer'>
        <PhoneIcon />
      </div>
      <div className='more-icon pointer'>
        <MoreIcon />
      </div>
    </div>
  );
};

export default OrderHeader;
