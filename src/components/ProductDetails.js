import React from 'react'
import store from '../store';
import {Card, Button} from 'react-bootstrap'

class ProductDetails extends React.Component{
    product = store.getState().selectedProduct;

    render(){
        let product = store.getState().selectedProduct;
        return(
            <Card>
                <Card.Img variant="top" src={product.img} className='product-img-big mx-auto'/>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Subtitle>${product.price}</Card.Subtitle>
                    <Card.Text>

                    </Card.Text>
                    <Button onClick={() => this.addToCart()}>Add to Cart</Button>
                    <br/>
                    <br/>
                    Description
                    <hr/>
                    {product.description}
                </Card.Body>
            </Card>
        )
    }

    addToCart(){
        store.dispatch({
            type: 'ADD_CART',
            product: this.product,
            product_id: this.props.product.id
        })

    }
}

export default ProductDetails;