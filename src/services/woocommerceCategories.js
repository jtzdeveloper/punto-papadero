import { woocommerce } from "./woocommerce"

const fromApiResponseToCategories = apiResponse => {
    const  data = [] = apiResponse.data 
    const ids = [143,144,145,149,150]
    
    if(Array.isArray(data)){
        const categories = data
       return categories.filter(opc => ids.includes(opc.id))
    }
    return []
}

export default async function getCategories(){
    return await woocommerce.get('products/categories',{per_page:50})
   .then(res => res)
   .then(fromApiResponseToCategories) 
}