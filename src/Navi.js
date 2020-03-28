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
          <NavbarBrand href="/">intro</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink>Components</NavLink>
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
