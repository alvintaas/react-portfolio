import { func } from 'prop-types';
import React, {useState} from 'react';

function MyComponent2() {

    const [name, setName] = useState('Guest');
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState('');
    const [payment, setPayment] = useState('');
    const [shipping, setShipping] = useState('Delivery');

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

    return (
        <div>
            <div className='card-heading'>
                <h2>Order Form</h2>                
            </div>
            
            <input value={name} onChange={handleNameChange}></input>
            <p>Name: {name}</p>

            <input type="number" value={quantity} onChange={handleQuantityChange}></input>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder='Delivery instructions'></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select payment method</option>
                <option value="credit">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bank">Bank Transfer</option>
            </select>
            <p>Payment Method: {payment}</p>

            <label>
                <input type='radio' value='Pick Up'
                        checked={shipping === 'Pick Up'}
                        onChange={handleShippingChange}>
                        </input>Pick Up
            </label>
            <label>
                <input type='radio' value='Delivery'
                        checked={shipping === 'Delivery'}
                        onChange={handleShippingChange}>
                        </input>Delivery
            </label>
            <br></br>
            <p>Shipping: {shipping}</p>
        </div>
    )
}

export default MyComponent2;