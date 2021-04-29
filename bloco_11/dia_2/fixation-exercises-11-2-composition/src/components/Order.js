// arquivo Order.js
import React from 'react';
import PropTypes from 'prop-types';

class Order extends React.Component {
  render() {
    const { user, product, price, id } = this.props.order;

    return (
      <div className="order">
        <p> {user} bought {product} for {price.value} {price.currency} id: {id} </p>
      </div>
    );
  }
}

Order.propTypes = {
  order: PropTypes.object,
};
export default Order;