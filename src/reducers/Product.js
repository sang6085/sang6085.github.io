
var initialState=[
    {
        id:1,
        name:"Iphone 6",
        price: 500,
        rating:2,
        img:"https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72"
    },
    
    {
        id:2,
        name:"Iphone 11",
        price: 500,
        rating:3,
        img:"https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72"

    },
    {
        id:3,
        name:"Iphone 7",
        price: 500,
        rating:5,
        img:"https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72"

    }
];
var myReducer=(state=initialState,action)=>{
    switch (action.type) {
    
        default: return state;
            
    }
}
export default myReducer;