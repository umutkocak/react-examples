import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";

export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] };

  changeCategory = category => {
    this.setState({
      currentCategory: category.categoryName
    });
    this.getProducts(category.id);
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = categoryId => {
    let url = "http://192.168.3.105:3000/products";
    if (categoryId) {
      url += `?categoryId=${categoryId}`;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  };

  addToCart = product => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });

    alertify.success(`${product.productName} added to card`);
  };

  removeFromCart = product => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.warning(`${product.productName} removed to card`);
  };

  render() {
    let productInfo = { title: "Products" };
    let categoryInfo = { title: "Categories" };
    return (
      <div>
        <Navi cart={this.state.cart} removeFromCart={this.removeFromCart} />
        <br />
        <Container>
          <Row>
            <Col xl="3" xs="12">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xl="9" xs="12">
              <ProductList
                products={this.state.products}
                addToCart={this.addToCart}
                currentCategory={this.state.currentCategory}
                info={productInfo}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
