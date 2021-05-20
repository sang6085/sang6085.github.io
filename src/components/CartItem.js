import React, { Component } from 'react';
import * as message from './../constants/Message';
class CartItem extends Component {
    onDeleteProduct=(product)=>{
        this.props.onDeleteProduct(product);
        this.props.onMessageDelete(message.MSG_DELETE);
    }
    changeUpdateProductInCart=(cart,quantity)=>{
        if(quantity>0){
            this.props.onUpdateProductInCart(cart,quantity);
            this.props.onMessageDelete(message.MSG_UPDATE);
        }
            
    }
    render() {
        var { cart }=this.props;
        return (
            <tr>
                <th scope="row">
                    <img src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72" alt="" className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{ cart.product.name }</strong>
                    </h5>
                </td>
                <td>{ cart.product.price }$</td>
                <td className="center-on-small-only">
                    <span className="qty">{ cart.quantity } </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light" onClick={ ()=>this.changeUpdateProductInCart(cart,cart.quantity-1) }>
                            <a href="/">—</a>
                        </label>
                        <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light" onClick={ ()=>this.changeUpdateProductInCart(cart,cart.quantity+1) }>
                            <a href="/" >+</a>
                        </label>
                    </div>
                </td>
                <td>{ (cart.product.price)*(cart.quantity) }$</td>
                <td>
                    <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top" title data-original-title="Remove item"onClick={ ()=>this.onDeleteProduct(cart) }>
                        X
                 </button>
                </td>
            </tr>
        );
    }
}

export default CartItem;
