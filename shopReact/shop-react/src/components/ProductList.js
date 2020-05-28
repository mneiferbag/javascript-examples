import React, { Component } from 'react';

class ProductList extends Component {
    render() {
        const listItems = this.props.products.map(item => (
            <div>
                <div>{item.sku}</div>
                <div>{item.name}</div>
                <div>{item.desc}</div>
            </div>
        ))
        return (
            <div>{listItems}</div>
        )
    }
}

export default ProductList;
