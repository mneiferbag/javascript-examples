import React, { Component } from 'react';

class ProductList extends Component {
    render() {
        const listItems = this.props.products.map(item => (
            <div>
                <div>{item.sku} - {item.name} - {item.desc}</div>
            </div>
        ))
        return (
            <div>
                <p>Product list:</p>
                <p>{listItems}</p>
            </div>
        )
    }
}

export default ProductList;
