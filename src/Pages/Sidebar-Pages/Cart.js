import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
    const { cart } = useCart();
    console.log('Cart:', cart);
  return (
    <div>
      <h2>Cart Page</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - €{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
