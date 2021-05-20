import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../components/Products';
import Product from './../components/Product';
import * as actions from './../actions/index';
class ProductContainer extends Component {
    showProducts=(products)=>{
        var result=null;
        if(products.length>0){
            result=products.map((product,index)=>{
                return <Product key={ index } product={ product } onAddToCart={ this.props.onAddToCart }onChangeMessage={ this.props.onChangeMessage }/>;
                
            });
        }
        return result;
    }
    render() {
        var products=this.props.products;
        return (
            <Products >{this.showProducts(products)}</Products>
             
        );
    }
}
const mapStateToProps=(state)=>{
    return {
        products:state.products
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return {
        onAddToCart:(product)=>{
            dispatch(actions.onAddToCart(product,1))
        },
        onChangeMessage:(message)=>{
            dispatch(actions.changMessage(message))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductContainer);
