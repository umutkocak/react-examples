import React, {Component} from "react";
import {
    Badge,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
} from "reactstrap";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import {Link} from "react-router-dom";

class CardSummary extends Component {
    renderEmpty() {
        return (
            <div>
                <NavItem>
                    <NavLink>Empty Cart</NavLink>
                </NavItem>
            </div>
        );
    }

    renderSummary() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Sepetiniz
                </DropdownToggle>
                <DropdownMenu right>
                    {this.props.cart.map((cartItem) => (
                        <DropdownItem key={cartItem.product.id}>
                            <Badge color="success"
                                   onClick={() => this.props.actions.removeFromCart(cartItem.product)}> X</Badge> {" "}{cartItem.product.productName} {" "}
                            <Badge> {cartItem.quantity}</Badge>
                        </DropdownItem>
                    ))}
                    <DropdownItem divider/>
                    <DropdownItem><Link style={{textDecoration: 'none'}} to="/cart">Sepete Git</Link> </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    }

    render() {
        return (
            <div>
                {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
        }
    };
}

function mapStateToProps(state) {
    return {cart: state.cartReducer};
}


export default connect(mapStateToProps, mapDispatchToProps)(CardSummary);
