import {useQuery,useQueryClient,useMutation} from "@tanstack/react-query"
import { deleteOrder } from "../services/woocommerceOrders"
import TitlePage from "./globals/TitlePage"
import MainContainer from "./globals/MainContainer"
import Container from './globals/Container'
import ListOrder from './Orders/ListOrder'

import getOrders from "../services/woocommerceOrders"
import Loading from "./Loading"
export default function ScreenOrdersPending(){


  const { isLoading,data,isError,error,isFetching  } = useQuery({
        queryKey:['ordersPending'],
        queryFn: ()=> getOrders({ status:'pending' })
    }) 

    const queryClient = useQueryClient()
    
    const deleteOrderMutation = useMutation({
      mutationFn: deleteOrder,
      onSuccess: () => { queryClient.invalidateQueries('ordersPending') }  
    })
   
    return (
        <>
          <TitlePage>Ordenes Pendientes</TitlePage>
          <MainContainer>
            <Container>
              <ListOrder isLoading={isLoading} isFetching={isFetching} data={data} deleteOrderMutation={deleteOrderMutation }  />
            </Container>
          </MainContainer>
       
          
      {/*   <div className="flex h-[calc(100vh-155px)] sm:h-[calc(100vh-200px)] lg:h-[calc(100vh-110px)] overflow-y-auto lg:justify-center">
            {isLoading || isFetching || deleteOrderMutation.isLoading   ? <Loading message={'Cargando Ordenes Pendientes'} /> : 
            <section className={`   bg-slate-900 h-[calc(100vh-200px)] sm:h-[calc(100vh-240px)] lg:h-[calc(100vh-150px)] xl:h-[calc(100vh-150px)] overflow-y-auto w-full  lg:w-3/4 lg:justify-center  rounded-xl text-sm mt-10 border-separate text-gray-400`}>
                {
                    
                    data.length === 0 ? <span className='text-white font-bold'>No existen ordenes pendientes</span> : 
                    data.map(order=>(
                        <Order key={order.id} order={order} deleteOrderMutation={ deleteOrderMutation } />
                    ))
                }
            </section>}
        </div> */}
 
  </>    
    )
}