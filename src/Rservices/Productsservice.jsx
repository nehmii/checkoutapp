const data={
    products:[
        {
            id:1,
            quantity: 20,
            name:'TeensHighheels',
            price:150,
            image:require('../Assets/Image1.jpg'),
        },
        {
            id:2,
            quantity: 20,
            name:'Teenssilverheels',
            price:170,
            image:require('../Assets/Image2.jpg'),
        },
        {
            id:3,
            quantity: 20,
            name:'AdultHighheels',
            price:200,
            image:require('../Assets/Image3.jpg'),
        },
    ],
};

export const updateProductQty = (cartItems) =>{
    let index = 0;
    let errorCollector = [];
    for(let prod of data.products){
        for(let item of cartItems){
            if (prod.id === item.id){
                const qty = data.products[index].quantity;
                if (qty < item.qty){
                    item['availableQty'] = qty;
                    errorCollector.push(item);
                }else{
                    data.products[index].quantity = qty - item.qty;
                }
            }
        }
        index ++;
    }
    return errorCollector;
}

export default data;