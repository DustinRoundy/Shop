import React from 'react';
import store from '../store';
import CheckoutItem from "./CheckoutItem";
import {ListGroup} from 'react-bootstrap'

class Checkout extends React.Component{
    render(){
        console.log(store.getState().cart);
        const products = store.getState().cart;
        const productList = products.map((p, index) => (
            <CheckoutItem product={p} key={index}/>
        ));
        let total = 0;
        products.forEach((p, i) => {
            total = total + (p.price * p.quantity);
        });
        return(
            <div className='container'>
                <div>
                    <ListGroup>
                        {productList}
                        <ListGroup.Item as='li' className='pricing'>
                           Total Price: ${total}
                           <button className='btn btn-success'>Checkout</button>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        )
    }
}

export default Checkout