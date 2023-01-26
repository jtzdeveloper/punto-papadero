
import Product from './Product'
import ContainerMessageText from '../globals/ContainerMessageText'

export default function ListProducts({ line_items }){
  
  return (
    line_items.length === 0 ? 
    <ContainerMessageText>
          No hay productos seleccionados
    </ContainerMessageText> :   
    line_items.map((product)=>(
      <Product product={product} />
         /*    <section key={ product.id } className="bg-gray-800 rounded-lg mt-1 ml-1 mr-1 font-bold  ">
              <div className="p-3 flex gap-10 justify-between">
                <div className="flex items-center">
                 <img className="rounded-full h-12 w-12  object-cover" src={product.images.at(-1).src} alt="unsplash image" /> 
                  <div className="ml-3">
                    <div className="">{product.name}</div>
                     <div className="text-gray-500">{product.categories.at(-1).name}</div> 
                  </div>
                </div>
                <div className="flex justify-center items-center">{product.quantitySelected} x { formatterPeso.format(product.price)}</div>
                <div className="p-3 flex gap-3 ">
                  <ButtonEdit />
                  <ButtonDelete />
                </div>
              </div>
            </section> */
          ))
    )
}