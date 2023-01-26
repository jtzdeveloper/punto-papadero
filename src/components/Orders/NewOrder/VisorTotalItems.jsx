import { formatterPeso } from "../../../utils"
import Button from "../../Button"


export default function VisorTotalItems({takeOrderTotalItems,takeOrderTotal,createNewOrder,cleanTakeOrder}){
    return(
        <section className='bg-slate-900 h-[calc(100vh-400px)] sm:h-[calc(100vh-200px)] flex gap-5 flex-col justify-center xl:justify-start  w-full xl:w-1/2 rounded-xl    border-separate text-gray-400'>
                  <section className='flex flex-col gap-5  bg-slate-800 py-5 px-10 m-1 rounded font-bold'>
                    <div className='flex justify-between'>
                        <section>TOTAL DE ITEMS</section>
                        <section>{takeOrderTotalItems}</section>
                    </div>
                    <div className='flex justify-between'>
                        <section>TOTAL A CONFIRMAR</section>
                        <section>{ formatterPeso.format(takeOrderTotal)} </section>
                    </div>
                    <div className='flex justify-center'>
                        <Button onClick={()=>createNewOrder()}>Confirmar</Button>
                        <Button onClick={()=>cleanTakeOrder()}>Limpiar</Button>
                    </div>
                  </section> 
                </section>
    )
}