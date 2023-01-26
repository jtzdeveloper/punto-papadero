import { woocommerce } from "./woocommerce"

export default async function getOrders({ status='pending'}){
    return await woocommerce.get('orders',{status})
   .then(res => res.data)
}

export async function createOrder( data ){
    console.log(data)
     return await woocommerce.post('orders',data)
   .then(res => res)
   /* .then(fromApiResponseToNewOrder)   */
}

export async function deleteOrder(idOrder){
  return await woocommerce.delete(`orders/${idOrder}`)
   .then(res => res)
}