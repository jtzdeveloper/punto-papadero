import { formatterPeso } from "../../../utils"
import ButtonEdit from '../../globals/Buttons/ButtonEdit'
import ButtonDelete from '../../globals/Buttons/ButtonDelete'
import Loading from "../../Loading"
import ListProducts from "../../Products/ListProducts"
export default function VisorItemsSelected({takeOrder,isLoading}){
    return (
        <section className="bg-slate-900 h-[calc(100vh-200px)] sm:h-[calc(100vh-200px)] lg:h-[calc(100vh-400px)] xl:h-[calc(100vh-150px)]    overflow-y-auto w-full  xl:w-1/2  rounded-xl text-sm mt-10 border-separate text-gray-400 ">
        {
           takeOrder.line_items.length === 0 ? <span className='flex font-bold h-full justify-center items-center'>No existen productos seleccionados</span> :
           isLoading ? <Loading message={'creando una nueva orden'} /> :
           <ListProducts line_items={takeOrder.line_items} />
        }
        
    </section>
    )
}