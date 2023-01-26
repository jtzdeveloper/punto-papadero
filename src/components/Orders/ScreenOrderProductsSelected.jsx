import ButtonEdit from '../globals/Buttons/ButtonEdit'
import ButtonDelete from '../globals/Buttons/ButtonDelete'
import ListProducts from '../globals/ListProducts'
import { formatterPeso } from '../../utils'
export default function ScreenOrderProductsSelected({takeOrder}){
    return (
        <section className="bg-slate-900 h-[calc(100vh-200px)] sm:h-[calc(100vh-200px)] lg:h-[calc(100vh-400px)] xl:h-[calc(100vh-150px)]    overflow-y-auto w-full  xl:w-1/2  rounded-xl text-sm mt-10 border-separate text-gray-400 ">
        {
          (
            <ListProducts line_items={takeOrder.line_items} />
          )
        }
        
    </section>
    )
}