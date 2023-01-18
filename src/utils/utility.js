
export const getCountTotalProducts = ({takeOrder}) =>{
    const { line_items } = takeOrder
    return line_items.reduce((accumulator, currentValue) => accumulator + currentValue.quantitySelected,0)
}

export const formatterPeso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  })