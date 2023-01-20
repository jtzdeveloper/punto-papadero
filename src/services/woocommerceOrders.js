import { woocommerce } from "./woocommerce"

export default async function getOrders({ status='pending'}){
    return await woocommerce.get('orders',{status})
   .then(res => res.data)
}