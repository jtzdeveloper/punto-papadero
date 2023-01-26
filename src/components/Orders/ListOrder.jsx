import ContainerMessageText from "../globals/ContainerMessageText";
import Loading from "../Loading";
import Order from "./Order";

export default function ListOrder({isLoading,data,deleteOrderMutation}){
  
    return (
        data.length === 0 ?<ContainerMessageText>No existen ordenes creadas</ContainerMessageText> :
        data.map(order => (
            <Order order={order} deleteOrderMutation={deleteOrderMutation} />
        ))       
    )
}