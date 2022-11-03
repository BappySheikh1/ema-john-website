import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader= async ()=>{
    // get products
 const productsData=await fetch('http://localhost:5000/products');
 const {products} = await productsData.json();

 
//  get cart
const saveCart=getStoredCart();
// console.log('save cart', saveCart);
const initialCart=[]
for(const id in saveCart){
   const addToProduct=products.find(product => product._id === id)
   if(addToProduct){
    const quantity =saveCart[id];
    addToProduct.quantity=quantity;
    initialCart.push(addToProduct)
   }
}
// console.log(previousCart);
return {products, initialCart};
}