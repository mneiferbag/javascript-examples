import React, { Component } from 'react';

class Basket extends Component {
    render() {
        const listItems = this.props.productsToOrder.map(item => (
            <div>
                <div>{item.sku} - {item.name}</div>
            </div>
        ))
        return (
            <div>
                <p>Your basket:</p>
                <p>{listItems}</p>
            </div>
        )
    }
}

export default Basket;
