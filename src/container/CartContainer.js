import React, { Component } from 'react';
import Cart from './../components/Cart';
import { connect } from 'react-redux';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import * as message from './../constants/Message';
import * as actions from './../actions/index';
class CartContainer extends Component {
    showCart=(cart)=>{
        var result=<tr><td>{message.MSG_EMPTY_CART}</td></tr>;
        if(cart.length>0){
            result=cart.map((cart,index)=>{
                return <CartItem key={index}cart={ cart } onUpdateProductInCart={ this.props.onUpdateProductInCart }onMessageDelete={ this.props.onMessageDelete}onDeleteProduct={ this.props.onDeleteProduct }/>;
            });
        }
        return result;
        
    }
    showCartResult=(cart)=>{
        var result=null;
        if(cart.length>0){
            result=<CartResult cart={cart}/>
        }
        return result;
    }
    render() {
        var { cart }=this.props;
        return (
           <Cart>
                { this.showCart(cart) }
                { this.showCartResult(cart) }
           </Cart>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        cart:state.cart
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return {
        onDeleteProduct:(product)=>{
            dispatch(actions.deleteProduct(product));
        },
        onMessageDelete:(message)=>{
            dispatch(actions.changMessage(message));
        },
        onUpdateProductInCart:(product,quantity)=>{
            dispatch(actions.onUpdateProductInCart(product,quantity));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);