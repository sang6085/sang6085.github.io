import * as types from './../constants/ActionTypes';
export const onAddToCart=(product,quantity)=>{
    return {
        type:types.ADD_TO_CART,
        product,
        quantity
    }
}
export const changMessage=(message)=>{
    return {
        type:types.CHANGE_MESSAGE,
        message
        
    }
}
export const deleteProduct=(product)=>{
    return {
        type:types.DELEET_PRODUCT,
        product
        
    }
}
export const onUpdateProductInCart=(product, quantity)=>{
    return {
        type:types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
        
    }
}