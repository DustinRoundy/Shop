import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import Login from "./components/login";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Checkout from "./components/Checkout";
import client from './api/client';
import store from './store';



class App extends React.Component{

    state = {
        products: [],
        selectedProduct: null
    };

    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
        this.getProducts();
    }

    getProducts = async () => {
        const response = await client.get('products', {
            params: {
                // q: term
            }
        });
        const categories = await client.get('categories', {
            params: {
                // q: term
            }
        });

        store.dispatch({
            type: 'SET_CATEGORY',
            categories: categories.data,
        });
        console.log(categories.data);

        store.dispatch({
            type: 'SET_PRODUCTS',
            products: response.data
        });

    };

    render(){
        return(
            <Router>
                <Navbar bg="light" expand="lg" sticky='top'>
                    <LinkContainer to="/">
                        <Navbar.Brand>Shop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            {/*<LinkContainer to="/">*/}
                                {/*<Nav.Link>Book Inv</Nav.Link>*/}
                            {/*</LinkContainer>*/}
                            {/*<LinkContainer to="/">*/}
                                {/*<Nav.Link>Book Inv</Nav.Link>*/}
                            {/*</LinkContainer>*/}
                            {/*<LinkContainer to="/">*/}
                                {/*<Nav.Link>Book Inv</Nav.Link>*/}
                            {/*</LinkContainer>*/}


                            {/*<Nav.Link href="#link">Link</Nav.Link>*/}
                            {store.getState().account !== '' ? <NavDropdown title={store.getState().account} id="basic-nav-dropdown">
                                <LinkContainer to='/checkout'>
                                    <NavDropdown.Item>Cart</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>Logout</NavDropdown.Item>
                            </NavDropdown> : <LinkContainer to='/checkout'>
                                <Nav.Link className='checkout'><i className="fas fa-shopping-basket"></i>checkout</Nav.Link>
                            </LinkContainer>}

                        </Nav>
                        {/*<Form inline>*/}
                            {/*<FormControl type="text" placeholder="Search" className="mr-sm-2" />*/}
                            {/*<Button variant="outline-success">Search</Button>*/}
                        {/*</Form>*/}
                    </Navbar.Collapse>
                </Navbar>
                        <Switch>
                            <Route exact path='/' component={Products}/>
                            <Route exact path='/login' component={Login}/>
                            <Route exact path='/product/:id' component={ProductDetails}/>
                            <Route path='/checkout' component={Checkout}/>
                            <Route render={() => {
                                return (
                                    <h1>404 Not found</h1>
                                )}}/>
                        </Switch>
                <nav className="navbar navbar-light bg-light footer fixed-bottom">
                    <p className='text-secondary text-center'>© 2019 Shop All rights reserved.</p>
                </nav>
            </Router>
        )
    }
}

export default App;