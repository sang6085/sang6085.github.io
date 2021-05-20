import React, { Component } from 'react';

class CartResult extends Component {
    toltalPrice=(cart)=>{
        var result=0;
        cart.map((cart,index)=>{
            result+=(cart.product.price*cart.quantity);
        })
        return result;
    }
    render() {
        var {cart}=this.props;

        return (
            <tr>
                <td colSpan={3} />
                <td>
                    <h4>
                        <strong>Tổng Tiền</strong>
                    </h4>
                </td>
                <td>
                    <h4>
                        <strong>{ this.toltalPrice(cart) }$</strong>
                    </h4>
                </td>
                <td colSpan={3}>
                    <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                                        <i className="fa fa-angle-right right" />
                    </button>
                </td>
            </tr>
        );
    }
}

export default CartResult;