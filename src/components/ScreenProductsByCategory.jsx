import { useParams,useMatch } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import getProductsByCategory  from '../services/woocommerceProducts'
import  HeadInfo  from './HeadInfo'
import Loading from './Loading'
export default function ScreenProductsByCategory({takeOrder}){
     const { id_category } = useParams()
     const { isLoading,data,isError,error,isFetching  } = useQuery({
        queryKey:['productsByCategory'],
        queryFn: ()=> getProductsByCategory(id_category)
    })   
    
    console.log(takeOrder)
     return (
       
        <div className="h-[calc(100vh-260px)] over">
            
            <HeadInfo title={'Products'} />
            {
                isLoading || isFetching ? <Loading message={'Cargando Productos'} /> :
            
            <div className='mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
             {
                data.map(product=>(
                    <div key={product.name}  className="relative  group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
                    <img className="w-20 h-20 object-cover object-center rounded-2xl" src={product.images.at(-1).src} alt="cuisine" />
                    <h4 className="text-white text-xl font-bold capitalize text-center">{product.name}</h4>
                     <p className="text-white/50">{ product.price } </p> 
                     {
                        product.type === 'simple' ?
                     <button className='w-1/2 h-10  m-1 rounded bg-slate-500 text-white font-bold'>agregar</button>:
                     <button className='w-1/2 h-10  m-1 rounded bg-slate-500 text-white font-bold'>ver mas</button>
                    }
                    {/* <p className="absolute top-2 text-white/20 inline-flex items-center text-xs">22 Online <span class="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p> */}
                  </div>
                ))
             }   
            </div>
            }
        </div>
        
    )
}