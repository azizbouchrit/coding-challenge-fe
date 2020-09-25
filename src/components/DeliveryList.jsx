import React, { useState } from "react";
import "./DeliveryList.css";
import info from "../assets/info-16.png";

const DeliveryList = (props) => {
  const [orders, setOrders] = useState([
    {
      courier: null,
      customer: {
        name: "Karim L.",
        fullAddress: "Tunis, Tunisia",
        id: "ckerkubem04aq07087wy956x5",
        latitude: 36.8386634,
        longitude: 10.2392804,
        phoneNumber: "11111111",
      },
      id: "ckerkubcm04aj07088iq517b2",
      orderItems: [
        {
          id: "ckerkubdh04ak07084vr8oa7y",
          name: "Sandwich Latino",
          price: 8.5,
        },
        {
          id: "ckerkube904an0708hjzzz53a",
          name: "Crispy Beef Chicken Onion Burger",
          price: 9,
        },
      ],
      orderType: "DELIVERY",
      reference: "882178960",
      restaurant: {
        fullAddress: "Avenue de Hédi Nouira, Ariana 2001",
        id: "cjn94mdtq4qr50b68pppdf116",
        latitude: 36.8614427,
        logoImg: "https://files-bocui07th.vercel.app/download%20(1).png",
        longitude: 10.1642221,
        name: "Baguette & Baguette Ennaser",
      },
      status: "NEW",
    },
    {
      courier: {
        id: "ckerkubem04aq07087wy956x5",
        name: "Ahmed",
        latitude: 36.8386636,
        longitude: 10.2392804,
      },
      customer: {
        name: "Samar B.",
        fullAddress: "Tunis, Tunisia",
        id: "ckerkubem04aq07087wy956x5",
        latitude: 36.8386634,
        longitude: 10.2392804,
        phoneNumber: "11111111",
      },
      id: "ckerkubcm04aj07088iq517b2",
      orderItems: [
        {
          id: "ckerkubdh04ak07084vr8oa7y",
          name: "Sandwich Fermier",
          price: 8.5,
        },
      ],
      orderType: "DELIVERY",
      reference: "882178961",
      restaurant: {
        fullAddress: "Avenue de Hédi Nouira, Ariana 2001",
        id: "cjn94mdtq4qr50b68pppdf116",
        latitude: 36.8614427,
        logoImg: "https://files-bocui07th.vercel.app/download%20(1).png",
        longitude: 10.1642221,
        name: "Baguette & Baguette Ennaser",
      },
      status: "EN_ROUTE",
    },
    {
      courier: {
        id: "ckerkubem04aq07087wy956x5",
        name: "Chakib",
        latitude: 36.8386636,
        longitude: 10.2392804,
      },
      customer: {
        name: "Manel B.",
        fullAddress: "Tunis, Tunisia",
        id: "ckerkubem04aq07087wy956x5",
        latitude: 36.8386634,
        longitude: 10.2392804,
        phoneNumber: "11111111",
      },
      id: "ckerkubcm04aj07088iq517b2",
      orderItems: [
        {
          id: "ckerkubdh04ak07084vr8oa7y",
          name: "Chicken Burger",
          price: 12,
        },
      ],
      orderType: "DELIVERY",
      reference: "882178961",
      restaurant: {
        fullAddress: "Avenue de Hédi Nouira, Ariana 2001",
        id: "cjn94mdtq4qr50b68pppdf116",
        latitude: 36.8614427,
        logoImg: "https://files-bocui07th.vercel.app/download%20(1).png",
        longitude: 10.1642221,
        name: "Baguette & Baguette Ennaser",
      },
      status: "DELIVERED",
    },
  ]);

  const enAttente = (orderStatus) => {
    return ["NEW", "PREPARING", "READY_FOR_PICKUP"].includes(orderStatus);
  };

  const enCours = (orderStatus) => {
    return ["PICKED_UP", "EN_ROUTE"].includes(orderStatus);
  };

  return (
    <div className='app__container delivery'>
      <h3 className='delivery__h3'>Les Livraisons</h3>
      <div className='delivery__block delivery__block--waiting'>
        <p className='delivery__p'>
          En attente d'action
          <span className='delivery__number'>
            ({orders.filter((order) => enAttente(order.status)).length}){" "}
          </span>
          <img src={info} alt='' />
        </p>
        <ul className='delivery__list'>
          {orders
            .filter((order) => enAttente(order.status))
            .map((order) => (
              <li
                key={order.id}
                className='delivery__list-item'
                onClick={() => props.setSelectedOrder(order)}
              >
                <div className='list-item__container'>
                  <span className='order-reference'>#{order.reference}</span>
                  <span className='order-items'>
                    {order.orderItems.length} items
                  </span>
                  <span className='order-time'>20 min.</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div className='delivery__block delivery__block--shipping'>
        <p className='delivery__p'>
          En cours{" "}
          <span className='delivery__number'>
            ({orders.filter((order) => enCours(order.status)).length})
          </span>
        </p>
        <ul className='delivery__list'>
          {orders
            .filter((order) => enCours(order.status))
            .map((order) => (
              <li
                key={order.id}
                className='delivery__list-item'
                onClick={() => props.setSelectedOrder(order)}
              >
                <div className='list-item__container'>
                  <span className='order-reference'>#{order.reference}</span>
                  <span className='order-items'>
                    {order.orderItems.length} items
                  </span>
                  <span className='order-time'>20 min.</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default DeliveryList;
