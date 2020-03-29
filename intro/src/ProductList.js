import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class ProductList extends Component {
  addToCart = product => {
    alert(product.productName);
  };
  render() {
    return (
      <div>
        <h4>{this.props.info.title}</h4>
        <Table className="table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Quantity Per Unit</th>
              <th>Units In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td> {product.productName}</td>
                <td> {product.quantityPerUnit}</td>
                <td> {product.unitsInStock}</td>
                <td>
                  <Button onClick={() => this.props.addToCart(product)} color="info">
                    add to cart
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
