import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from './redux/CartSlice'
import './CartPage.css';

const CartPage = () => {
  const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${item.price * item.quantity}</td>
              <td>
                <button onClick={() => dispatch(addItem(item.id))}>+</button>
                <button onClick={() => dispatch(removeItem(item.id))}>-</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-summary">
        <h3>Total Quantity: {totalQuantity}</h3>
        <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default CartPage;
