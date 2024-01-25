// Cart.js
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const Cart = () => {
    const [sideCart, setsideCart] = useState(false);
    const [cartItems, setCartItems] = useState([]); // State to store cart items

    // Function to add item to the cart
    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    return (
        <div>
            {/* ... Your existing JSX code ... */}
            {cartItems.map((item) => (
                <div key={item.id}>
                    {/* Display item details */}
                    <p>{item.title}</p>
                    <p>Quantity: {item.quantity}</p>
                    {/* ... other details ... */}
                </div>
            ))}
            {/* ... Your existing JSX code ... */}
        </div>)
};

export default Cart;
