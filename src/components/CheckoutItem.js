import React from 'react';
import {ListGroup, Button} from 'react-bootstrap'
import '../styles.css'
import store from "../store";

class CheckoutItem extends React.Component{
    state={
        quantity: this.props.product.quantity
    };


    render(){
        return(
            <ListGroup.Item as='li'>
                <div className='row'>
                    <div className='col-md-3'>
                        <img src={this.props.product.img} className='thumb-img' alt={this.props.product.title}/>
                    </div>
                    <div className='col-md-5 price-info'>
                        <div>
                            <h4>{this.props.product.title}</h4>
                            <p>${(this.props.product.price * this.props.product.quantity).toFixed(2)}</p>
                        </div>
                    </div>
                    <div className='col-md-4 update'>
                        <div className='row'>
                            <label htmlFor="quantity">Quantity:</label>
                            <select id='quantity' className='form-control' onChange={(e) => this.update(this.props.product.id, e) } value={this.props.product.quantity}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                        </div>
                        <div className='row'>
                            <Button variant="outline-danger" onClick={() => store.dispatch({
                                type: 'REMOVE_CART',
                                product_id: this.props.product.id
                            })}>Delete</Button>
                        </div>
                    </div>
                </div>
            </ListGroup.Item>
        )
    }

    update(id, e){
        store.dispatch({
            type: 'UPDATE_CART',
            product_id: id,
            quantity: e.target.value,
        })
    }
}

export default CheckoutItem;