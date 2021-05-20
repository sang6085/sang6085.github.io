import * as types from './../constants/ActionTypes';
var data=JSON.parse(localStorage.getItem('cart'));
var initialState=data?data:[];

var findIndex=(cart,product)=>{
    var result=-1;
    if(cart.length>0){
        for(var i=0;i<cart.length;i++){
            if(cart[i].product.id===product.id){
                result=i;
                break;
            }
        }
    }
    return result;
}
var findIndexOf=(products,id)=>{
    var result=-1;
    products.map((product,index)=>{
        if(product.product.id===id){
            result=index;
        }
        
    });
    return result;
}
var myReducer=(state=initialState,action)=>{
    switch (action.type) {
        case types.ADD_TO_CART:
                var { product,quantity } = action;
                var productItem={
                    product,quantity
                }
                var index=findIndex(state,product);
                if(index!==-1){
                    state[index].quantity+=quantity;
                }
                else {
                     state.push(productItem);
                }
                localStorage.setItem("cart",JSON.stringify(state));
             return [...state];
             case types.DELEET_PRODUCT:
                 var index=findIndexOf(state,action.product.product.id);
                 state.splice(state[index],1);
                localStorage.setItem('cart',JSON.stringify(state));
                 return [...state];
            case types.UPDATE_PRODUCT_IN_CART:
                    var index=findIndexOf(state,action.product.product.id);
                    state[index].quantity=action.quantity;
                   localStorage.setItem('cart',JSON.stringify(state));
                   
                   //console.log(action.quantity);
                   //console.log(action.product);
                    return [...state];
            default:
                return [...state];
    }
}
export default myReducer;