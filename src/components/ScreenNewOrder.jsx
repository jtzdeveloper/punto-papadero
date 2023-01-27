import {formatterPeso, getTakeOrderTotal,getTakeOrderTotalItems} from '../utils'
import { toast } from 'react-toastify';
import TitlePage from './globals/TitlePage'
import {useQuery,useQueryClient,useMutation} from "@tanstack/react-query"
import {createOrder} from '../services/woocommerceOrders'
import MainContainer from './globals/MainContainer'
import Container from './globals/Container'
import ListProducts from './Products/ListProducts'
import Button from './Button'
import Loading from './Loading'

const Mess = ({order})=> {
  return <div className='w-full h-full flex flex-col rounded'>
    <span className='text-white text-xl'>Se ha creado exitosamente la orden N {order.id}</span>
  </div>
}

export default function ScreenNewOrder({takeOrder,setTakeOrder}){
  const takeOrderTotal = getTakeOrderTotal({takeOrder})
  const takeOrderTotalItems = getTakeOrderTotalItems({takeOrder})
  const cleanTakeOrder = () => setTakeOrder({line_items:[]}) 
    
    
  const queryClient = useQueryClient()
  const options = {
    autoClose: true,
    type: toast.TYPE.SUCCESS,
    hideProgressBar: true,
    position: toast.POSITION.TOP_CENTER,
    style:{backgroundColor: "#0f172a" }
    // and so on ...
  }

  const onload = (resp) => {
    setTakeOrder({line_items:[]})
    queryClient.invalidateQueries('ordersPending')
    console.log(resp)
    toast(<Mess order={resp.data} /> , options)
    
  }
  const addOrderMutation = useMutation({
    mutationFn: createOrder,onSuccess:(resp)=>onload(resp)
  })

 

  const createNewOrder = () => {
    if(takeOrder.line_items.length === 0 ){
      return 
    } 
    const line_items = takeOrder.line_items.map(order=>(
      order.type === 'simple' ? { product_id:order.id,quantity:order.selectedQuantity  } 
      : 
      { product_id:order.id_product,variation_id:order.id,quantity:order.selectedQuantity }
    ))

    const newOrder = {
      "status": "pending",
      "billing": {
          "first_name":'Juan' /*  inputName.current.value */
      },
      "shipping": {
          "first_name": 'Juan'
         },
      line_items
    }

    addOrderMutation.mutate(newOrder)

  }
  const {line_items} = takeOrder
  return (
        <>
          <TitlePage>Nueva Orden</TitlePage>
            <MainContainer>
              { addOrderMutation.isLoading ? <Loading message={'Creando nueva orden'}/> :
              <Container>
                <ListProducts line_items={line_items} />
              </Container>
              }
              <Container>
                <section className='flex font-bold xl:text-xl px-3 h-10 items-center justify-between m-2   bg-slate-600 ml-5 rounded'>
                    <div className=''>TOTAL DE ITEMS</div>
                    <div>{takeOrderTotalItems}</div>
                </section>
                <section className='flex font-bold xl:text-xl px-3 h-10 items-center justify-between m-2   bg-slate-600 ml-5 rounded'>
                    <div className=''>TOTAL A CONFIRMAR</div>
                    <div className=''>{ formatterPeso.format(takeOrderTotal)}</div>
                </section>
                <section className='flex justify-center gap-10'>
                    <Button onClick={()=>createNewOrder()} >Confirmar</Button>
                    <Button onClick={()=>cleanTakeOrder()}>Limpiar</Button>
                </section>
              </Container>
            </MainContainer>  
             
            {/*   <section className="w-full  h-[calc(100vh-150px)] sm:h-[calc(100vh-200px)] lg:h-[calc(100vh-200px)] xl:h-full  flex items-center  flex-col xl:flex-row gap-1    "> */}
                 {/*  <ContentNewOrder isLoading={addOrderMutation.isLoading}>
                    <VisorItemsSelected  takeOrder={takeOrder} isLoading={addOrderMutation.isLoading} />
                    <VisorTotalItems takeOrderTotal={takeOrderTotal} 
                                     takeOrderTotalItems={takeOrderTotalItems} 
                                     createNewOrder={createNewOrder}
                                     cleanTakeOrder={cleanTakeOrder}/>
                  </ContentNewOrder> */}
              {/* </section> */}
        </>
        
    )
}

