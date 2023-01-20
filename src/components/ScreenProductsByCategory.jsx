import { useParams,useMatch } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import getProductsByCategory  from '../services/woocommerceProducts'
import  HeadInfo  from './HeadInfo'
import TitlePage from './globals/TitlePage'
import Button from './Button'
import Loading from './Loading'
import { useEffect, useState } from 'react'
export default function ScreenProductsByCategory({takeOrder,setTakeOrder}){
     const { id_category } = useParams()
     const { isLoading,data,isError,error,isFetching  } = useQuery({
        queryKey:['productsByCategory'],
        queryFn: ()=> getProductsByCategory(id_category)
    })  
    
    

    
    const takeOrderAddProduct = (product) => {
        let { line_items } = takeOrder
        if(line_items.find(currentProduct=>currentProduct.id === product.id)){
            const newLineItems = line_items.map(currentProduct => currentProduct.id ===  product.id 
                ? ({
                   ...currentProduct,
                   quantitySelected:currentProduct.quantitySelected + 1 
                })
                : currentProduct)
            return setTakeOrder({line_items: newLineItems})  
        }
        return setTakeOrder({
            line_items:takeOrder.line_items.concat({
                ...product,
                quantitySelected:1
            })
        })
    }

   


     return (
        <div className="">
            <TitlePage>Productos</TitlePage>
            
            
            <div className='h-[calc(100vh-110px)] overflow-y-auto'>
            {
                isLoading || isFetching ? <Loading message={'Cargando Productos'} /> :
                <div className='mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-2'>
                {
                    data.map(product=>(
                        <section key={product.id} className='flex flex-col bg-slate-900 rounded-xl px-2'> 
                            <div className='flex py-5'>
                                <img className="w-12 h-12 xl:w-20 xl:h-20 object-cover object-center rounded" src={product.images.at(-1).src} alt="cuisine" />
                            </div>
                            <div className='flex flex-col'>
                                <h5 className="text-white text-xs xl:text-xl capitalize ">{ product.name }</h5>
                                
                                 <section className='flex justify-between'>
                                    <span className="text-xl  pb-5 font-bold text-gray-900 dark:text-white">${product.price}</span>
                                    {
                                        product.type === 'simple' ?
                                        <Button onClick={()=>takeOrderAddProduct(product)}>agregar </Button>:
                                        <Button>opciones</Button>
                                    }
                                 </section>
                            </div>
                        </section>
                    /*     <div className="relative  group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover" key={product.name}  >
                        <img className="w-10 h-10 object-cover object-center rounded-2xl" src={product.images.at(-1).src} alt="cuisine" />
                        <h4 className="text-white text-xl font-bold capitalize text-center">{product.name}</h4>
                        <p className="text-white/50">{ product.price } </p> 
                        {
                            product.type === 'simple' ?
                            <Button onClick={()=>takeOrderAddProduct(product)}>agregar </Button>:
                            <Button>ver mas</Button>
                        }
                        <p className="absolute top-2 text-white/20 inline-flex items-center text-xs">22 Online <span class="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
                    </div> */
                    ))
                }   
                </div>
            
            }</div>
        </div>
        
    )
}