import { renderOrderSummery } from "./checkOutScript/orderSummary.js";
import { renderPaymentummary } from "./checkOutScript/paymentSummery.js";
import { loadProducts } from "../data/products.js";
//import '../data/cart-class.js';

//import '../data/backend-practice.js';


loadProducts( () => {
    renderPaymentummary();
    renderOrderSummery();
});
