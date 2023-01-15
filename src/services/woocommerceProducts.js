import { woocommerce } from "./woocommerce"

export default async function getProductsByCategory(id_category){
    return await woocommerce.get('products',{category:id_category})
   .then(res => res.data)
}