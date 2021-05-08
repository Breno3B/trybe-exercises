// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import Order from './components/Order';

class App extends React.Component {
  render() {
    const orders = [
      {
        id: 102,
        user: "cena@gmail.com",
        product: "Razer Headphone",
        price: {
          value: 99.99,
          currency: "dollars"
        }
      },

      {
        id: 77,
        user: "cena@gmail.com",
        product: "Monster 500mL",
        price: {
          value: 9.99,
          currency: "dollars"
        }
      },
    ];

    return (
      <div className="App">
        <h1> Orders recently created </h1>
        {orders.map((order, id) => <Order key={id} order={order} />)}
        {/* or */}
        <Order order={orders[0]} />;
        <Order order={orders[1]} />;

      </div>
    );
  }
}

export default App;