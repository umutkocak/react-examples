import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {
    getCategories,
    changeCategory,
} from "../../redux/actions/categoryActions";
import {ListGroup, ListGroupItem, Badge} from "reactstrap";
import * as productActions from "../../redux/actions/productActions";

export class CategoryList extends Component {
    componentDidMount() {
        this.props.actions.getCategories();
    }

    selectCategory = (category) => {
        this.props.actions.changeCategory(category);
        this.props.actions.getProducts(category.id);
    };

    render() {
        return (
            <div>
                <h1>
                    <Badge color="warning">Categories</Badge>
                </h1>
                <ListGroup>
                    {this.props.categories.map((category, index) => (
                        <ListGroupItem
                            active={
                                category.id === this.props.currentCategory.id ? true : false
                            }
                            onClick={() => this.selectCategory(category)}
                            key={index}
                        >
                            {category.categoryName}
                        </ListGroupItem>
                    ))}
                </ListGroup>
                <h5> Seçili Kategori: {this.props.currentCategory.categoryName}</h5>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
});

const mapDispatchToProps = (dispacth) => ({
    actions: {
        getCategories: bindActionCreators(getCategories, dispacth),
        changeCategory: bindActionCreators(changeCategory, dispacth),
        getProducts: bindActionCreators(productActions.getProducts, dispacth),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
