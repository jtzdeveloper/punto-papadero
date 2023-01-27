import ContainerMessageText from "../globals/ContainerMessageText";
import Loading from "../Loading";
import Order from "./Order";

export default function ListOrder({isLoading,data,deleteOrderMutation}){
    const MESSAGE_TEXT_ORDERS_PENDING = 'NO EXISTEN ORDENES PENDIENTES'
    return (
        isLoading ? <Loading /> :
        data.length === 0 ?<ContainerMessageText>{MESSAGE_TEXT_ORDERS_PENDING}</ContainerMessageText> :
        data.map(order => (
            <Order order={order} deleteOrderMutation={deleteOrderMutation} />
        ))       
    )
}