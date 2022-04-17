import React from 'react';
import './Cart.css';


const Cart = (props) => {
    const cart =props.cart;
    console.log(cart);
    //reduce prd total value calculation 
   // const total = cart.reduce((total,prd) => total + prd.price,0);
   // for loop calculation 
   let total = 0;
   for (let i = 0; i< cart.length ; i++){
       const product =cart[i];
       total =total + product.price;
   }
            //shipping cost
            let shipping =0;

            if(total> 40){
                shipping =0;
            }
            else if (total >20){
                shipping =4.99;
            }

            else if (total > 0){
                shipping = 10.99;
            }

            //tax calculation

            const tax= total /10; 

            //fix number
            const formatNumber = num =>{
                const precision = num.toFixed(2);
                return Number(precision);
            } 

    return (
        <div className='cart-container'>
            <h4>Order Summary</h4>
            <h5>Items Ordered {cart.length}</h5>
            <h6>Product Price:{total}</h6>
            <p><small>Shiiping Cost: {shipping} </small></p>
            <p>Tax + Vat :{tax}</p>
            <h2>Total Price: {total + shipping +tax }</h2>
        </div>
    );
};

export default Cart;