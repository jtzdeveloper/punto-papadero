import pathOrder from '../../assets/icons/order.svg'
import ButtonEdit from '../globals/Buttons/ButtonEdit'
import ButtonDelete from '../globals/Buttons/ButtonDelete'
import { Link } from 'react-router-dom'
import { formatterPeso } from '../../utils'
export default function Order({ order,deleteOrderMutation }){
    console.log(order)
    const { id,billing,total } = order
    
    return (
        <Link to={`/orderPendingEdit/${order.id}`} key={ order.id } className="bg-gray-800 rounded-lg mt-1 ml-1 mr-1 font-bold p-3 flex gap-10 justify-between  ">
       
          <div className="flex items-center">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-slate-400">
              <img className="rounded-full h-12 w-12  object-cover" src={pathOrder} alt="unsplash image" />
            </div>
            <div className="ml-3">
              <div className=""># {id}</div>
              <div className="text-gray-500"></div>
            </div>
          </div>
          <div className="flex justify-center items-center">
              {billing.first_name}
          </div>
          <div className="flex justify-center items-center">
               {formatterPeso.format(total)}
          </div>
          <div className="flex justify-center items-center">
               4 
          </div>
          <div className="p-3 flex gap-3">
         
           {/* <Link to={`/orderPendingEdit/${order.id}`}></Link>  */}
           
            <ButtonDelete onClick={()=>deleteOrderMutation.mutate(order.id) }></ButtonDelete>
          </div>
        
</Link>
    )
}