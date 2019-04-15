import React from 'react';
import Product from './Product'
import store from '../store';
import * as _ from 'lodash';
import Filter from "./Filter";

class Products extends React.Component{
    state={
        sort_by: '',
        sort_type:'',
        category: '',
    };
    render(){
        let products = store.getState().products ? store.getState().products : [];
        if(this.state.sort_by !== '' && this.state.category !== '' ){
            products = _.filter(products, {'category': this.state.category});
            products = _.orderBy(products, [this.state.sort_by], [this.state.sort_type]);
        }
        else if(this.state.sort_by !== ''){
            products = _.orderBy(products, [this.state.sort_by], [this.state.sort_type]);
        }
        else if(this.state.category !== ''){
            products = _.filter(products, {'category': this.state.category});
        }
        let productList = products.map((product, index) => {
            return(
                <Product product={product} key={index} id={product.id}/>
            )
        });
        return(
            <div>
                <Filter sort={this.sort} sortby={this.state.sort_by} sorttype={this.state.sort_type} category={this.state.category} filter={this.filter}/>
                <div className='cardDiv'>
                    {productList}
                </div>
            </div>
        )
    }

    sort = (e) => {
            let sort = JSON.parse(e.target.value);
            this.setState({sort_by: sort.sort_by, sort_type: sort.sort_type});
            console.log(sort);
    }

    filter = (e) => {
        this.setState({category: e.target.value});
        console.log(e.target.value);
    }
}

export default Products;