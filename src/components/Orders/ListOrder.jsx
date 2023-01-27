import ContainerMessageText from "../globals/ContainerMessageText";
import Loading from "../Loading";
import Order from "./Order";

export default function ListOrder({isLoading,data,deleteOrderMutation,isFetching}){
    const MESSAGE_TEXT_ORDERS_PENDING = 'NO EXISTEN ORDENES PENDIENTES'
    return (
        isLoading || isFetching || deleteOrderMutation.isFetching  ? <Loading /> :
        data.length === 0 ?<ContainerMessageText>{MESSAGE_TEXT_ORDERS_PENDING}</ContainerMessageText> :
        data.map(order => (
            <Order key={order.id} order={order} deleteOrderMutation={deleteOrderMutation} />
        ))       
    )
}