import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";
import { Link } from "react-router-dom";
import CartSummary from "./CartSummary";

const Example = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
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
              cart={props.cart}
              removeFromCart={props.removeFromCart}
            />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
