import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import CartSummary from "./CartSummary";
import { Link } from "react-router-dom";

export default class Navi extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
            <Link to="">intro</Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink>
                  <Link to="cart">Cart </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="form1">Form 1 </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="form1-2">Form 2 </Link>
                </NavLink>
              </NavItem>
              <CartSummary
                cart={this.props.cart}
                removeFromCart={this.props.removeFromCart}
              />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
