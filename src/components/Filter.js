import React from 'react';
import Product from "./Product";
import store from '../store';

class Filter extends React.Component{
    render(){
        let categoryList = store.getState().categories.map((category, index) => {
            return(
                <option value={category} key={index}>{category}</option>
            )
        });
        return(
            <nav className="nav">
                <label htmlFor='select' className='filter'>Sort By:</label>
                <select className='form-control select' onChange={(e) => this.props.sort(e)} value={`{"sort_by":"${this.props.sortby}", "sort_type": "${this.props.sorttype}"}`}>
                    <option value='{"sort_by":"", "sort_type": ""}'>-----------------</option>
                    <option value='{"sort_by":"price", "sort_type": "asc"}'>Price Low to High</option>
                    <option value='{"sort_by":"price", "sort_type": "desc"}'>Price High to Low</option>
                    <option value='{"sort_by":"rating", "sort_type": "asc"}'>Rating Low to High</option>
                    <option value='{"sort_by":"rating", "sort_type": "desc"}'>Rating High to Low</option>
                </select>

                <label htmlFor='select' className='filter'>Shop In:</label>
                <select className='form-control select' onChange={(e) => this.props.filter(e)} value={this.props.category}>
                    <option value=''>All Categories</option>
                    {categoryList}
                    <option value='headphones'>headphones</option>
                </select>
            </nav>
        )

    }
}

export default Filter;