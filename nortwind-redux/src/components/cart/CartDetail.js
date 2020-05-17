import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import {connect} from "react-redux";
import {Badge, Button, Table} from "reactstrap";

class CartDetail extends Component {
    render() {
        return (
            <div>
                <Table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Stock</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.cart.map((cartItem) => (
                        <tr key={cartItem.product.id}>
                            <td>{cartItem.product.id}</td>
                            <td>{cartItem.product.productName}</td>
                            <td>{cartItem.product.quantityPerUnit}</td>
                            <td>{cartItem.product.unitPrice}</td>
                            <td>{cartItem.product.unitsInStock}</td>
                            <td>
                                <Button onClick={() => this.props.actions.removeFromCart(cartItem.product)}>
                                    <Badge>X</Badge>
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


export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
