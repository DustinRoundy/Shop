import React from 'react';
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import store from '../store';

class Product extends React.Component{
    render() {
        return(
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.product.img} className='product-img mx-auto'/>
                <Card.Body>
                    <Card.Title>{this.props.product.title}</Card.Title>
                    <Card.Text>
                        ${this.props.product.price} | Rating: {this.props.product.rating}
                    </Card.Text>
                    <div className='product-btns'>
                        <Link to={`/product/${this.props.product.id}`} className='item' onClick={() => store.dispatch({
                            type: 'SELECT_PRODUCT',
                            product: this.props.product
                        })}>
                            See More Details
                        </Link>
                        <button className='btn btn-success' type='button' onClick={() => store.dispatch({
                            type: 'ADD_CART',
                            product: this.props.product,
                            product_id: this.props.product.id
                        })}>Add To Cart</button>
                    </div>
                </Card.Body>
            </Card>
        )
    }
}

export default Product