import React, { Component } from 'react';
import ProductContainer from './../container/ProductContainer';
class Products extends Component {
   
    render() {

       var products=this.props.products;
        //console.log(this.props.products);
        return (
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">
                {this.props.children}
                   
                </div>
                
            </section>
        );
    }
}

export default Products;