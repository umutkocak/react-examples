import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import CategoryList from "../categories/CategoryList";
import ProductList from "../products/ProductList";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <div>
          <Row lg="12">
            <Col lg="3" xs="12">
              <CategoryList />
            </Col>
            <Col lg="9" xs="12">
              <ProductList />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
