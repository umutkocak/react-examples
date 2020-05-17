import React, {Component} from "react";
import {connect} from "react-redux";
import {Badge, Button, Table} from "reactstrap";
import {bindActionCreators} from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as cardActions from "../../redux/actions/cartActions";
import alertify from "alertifyjs";

export class ProductList extends Component {
    componentDidMount() {
        this.props.actions.getProducts();
    }

    addToCart = (product) => {
        this.props.actions.addToCart({quantity: 1, product});
        alertify.success(product.productName + " sepete eklendi");
    }

    render() {
        return (
            <div>
                <h1>
                    <Badge color="warning">Products</Badge>
                    <Badge color="success">
                        {this.props.currentCategory.categoryName}
                    </Badge>
                </h1>

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
                    {this.props.products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.productName}</td>
                            <td>{product.quantityPerUnit}</td>
                            <td>{product.unitPrice}</td>
                            <td>{product.unitsInStock}</td>
                            <td>
                                <Button onClick={() => this.addToCart(product)}>
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

const mapStateToProps = (state) => ({
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
});

const mapDispatchToProps = (dispatch) => ({
    actions: {
        getProducts: bindActionCreators(productActions.getProducts, dispatch),
        addToCart: bindActionCreators(cardActions.addToCart, dispatch),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
