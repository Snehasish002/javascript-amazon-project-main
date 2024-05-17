import { renderOrderSummery } from "./checkOutScript/orderSummary.js";
import { renderPaymentummary } from "./checkOutScript/paymentSummery.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js';

//import '../data/backend-practice.js';


Promise.all([
    loadProductsFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })
]).then((values) => {

    console.log(values);
    renderPaymentummary();
    renderOrderSummery();
});

/*

new Promise ((resolve) => {

    
    loadProducts(() => {
        resolve('value1');
    });

}).then((value) => {

    console.log(value);

    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    });

    
}).then(() => {
    renderPaymentummary();
    renderOrderSummery();
});*/


/*

loadProducts( () => {
    loadCart(() => {
        renderPaymentummary();
        renderOrderSummery();
    });
    
});*/
