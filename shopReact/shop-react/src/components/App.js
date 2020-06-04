import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import Basket from './Basket';
import ProductList from './ProductList';

class App extends Component {

  constructor() {
    super()
    this.state = {
      productList: [],
      orderList: []
    }
  }

  componentDidMount() {
    fetch('./product-list.json')
      .then(response => response.json())
      .then(result => {
        const prods = result.map(item => {
          return item
        })
        this.setState({
          productList: prods
        })
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
        <section>
          <Basket productsToOrder={this.state.orderList} />
          <hr />
          <ProductList products={this.state.productList} />
        </section>
      </div>
    );
  }
}

export default App;
