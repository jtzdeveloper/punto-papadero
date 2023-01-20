import iconDelete from '../assets/icons/delete.svg'
import {formatterPeso, getTakeOrderTotal,getTakeOrderTotalItems} from '../utils'
import Button from '../components/Button'
 import ButtonEdit from './globals/Buttons/ButtonEdit'
 import ButtonDelete from './globals/Buttons/ButtonDelete'
import TitlePage from './globals/TitlePage'
export default function ScreenNewOrder({takeOrder,setTakeOrder}){
  const takeOrderTotal = getTakeOrderTotal({takeOrder})
  const takeOrderTotalItems = getTakeOrderTotalItems({takeOrder})
  const cleanTakeOrder = () => setTakeOrder({line_items:[]}) 
  
  return (
        <>
           <div className="flex justify-between items-center">
                <TitlePage>Nueva Orden</TitlePage>
                <div className="inline-flex items-center space-x-2">
                  <a className="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </a>
                  <a className="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                  </a>
                </div>
              </div>
              <section className="w-full  h-[calc(100vh-150px)] sm:h-[calc(100vh-200px)] lg:h-[calc(100vh-200px)] xl:h-full  flex items-center  flex-col xl:flex-row gap-1    ">
              <section className="bg-slate-900 h-[calc(100vh-200px)] sm:h-[calc(100vh-200px)] lg:h-[calc(100vh-400px)] xl:h-[calc(100vh-150px)]    overflow-y-auto w-full  xl:w-1/2  rounded-xl text-sm mt-10 border-separate text-gray-400 ">
                    {
                      takeOrder.line_items.map((product)=>(
                        <section key={ product.id } className="bg-gray-800 rounded-lg mt-1 ml-1 mr-1 font-bold  ">
                          <div className="p-3 flex gap-10 justify-between">
                            <div className="flex align-items-center">
                              <img className="rounded-full h-12 w-12  object-cover" src={product.images.at(-1).src} alt="unsplash image" />
                              <div className="ml-3">
                                <div className="">{product.name}</div>
                                <div className="text-gray-500">{product.categories.at(-1).name}</div>
                              </div>
                            </div>
                            <div className="flex justify-center items-center">{product.quantitySelected} x { formatterPeso.format(product.price)}</div>
                            <div className="p-3 flex gap-3 ">
                              <ButtonEdit></ButtonEdit>
                              <ButtonDelete></ButtonDelete>
                            </div>
                          </div>
                        </section>
                      ))
                    }
                    
                </section>
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
                        <Button>Confirmar</Button>
                        <Button onClick={()=>cleanTakeOrder()}>Limpiar</Button>
                    </div>
                </section> 
                </section>
              </section>
        </>
        
    )
}

