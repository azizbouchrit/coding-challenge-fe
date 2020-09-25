import React, { useState } from "react";
import "./App.css";
import DeliveryList from "./components/DeliveryList";
import OrderDetails from "./components/OrderDetails";

const App = () => {
  const [selectedOrder, setSelectedOrder] = useState({});
  return (
    <div className='App'>
      <DeliveryList setSelectedOrder={(order) => setSelectedOrder(order)} />
      <OrderDetails selectedOrder={selectedOrder} />
    </div>
  );
};

export default App;
