import React, {useState} from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";
import CartSummary from "../cart/CardSummary";
import {Link} from "react-router-dom";


const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <Link style={{textDecoration: 'none'}} to="/"> <NavbarBrand href="/">React App
                </NavbarBrand> </Link>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link style={{textDecoration: 'none'}} to="/cart"><NavLink>Sepet
                            </NavLink></Link>
                        </NavItem>
                        <CartSummary/>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Example;
