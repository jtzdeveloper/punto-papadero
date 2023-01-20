import {useQuery} from "@tanstack/react-query"
import TitlePage from "./globals/TitlePage"
import Order from "./Orders/Order"

import getOrders from "../services/woocommerceOrders"
import Loading from "./Loading"
export default function ScreenOrdersPending(){
    const { isLoading,data,isError,error,isFetched  } = useQuery({
        queryKey:['ordersPending'],
        queryFn: ()=> getOrders({ status:'pending' })
    }) 
    
    return (
        <div className="">
        <div className="flex justify-between items-center">
          <TitlePage>Ordenes Pendientes</TitlePage>
          <div className="inline-flex items-center space-x-2">
            <a className="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </a>
            <a className="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </a>
          </div>
        </div>
          
        <div className="flex h-[calc(100vh-155px)] sm:h-[calc(100vh-200px)] lg:h-[calc(100vh-110px)] overflow-y-auto lg:justify-center">
            {
                isLoading ? <Loading message={'Cargando Ordenes Pendientes'} /> : 
            
            <section className="bg-slate-900 h-[calc(100vh-200px)] sm:h-[calc(100vh-240px)] lg:h-[calc(100vh-150px)] xl:h-[calc(100vh-150px)] overflow-y-auto w-full  lg:w-3/4 lg:justify-center  rounded-xl text-sm mt-10 border-separate text-gray-400 ">
                {
                    data.map(order=>(
                        <Order order={order} />
                    ))
                }
                
            </section>
            }
      </div>
  </div>    
    )
}