import iconEdit from '../assets/icons/edit.svg'
import iconDelete from '../assets/icons/delete.svg'
import {formatterPeso} from '../utils'
import Button from '../components/Button'
export default function ScreenNewOrder({ takeOrder }){
  console.log(takeOrder)
  return (
        <div className="">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-white ">Nueva Orden</h3>
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
              <section className="h-[calc(100vh-110px)] w-full flex items-center flex-col xl:flex-row gap-3    ">
                
                <section className="bg-slate-900 h-full overflow-y-auto w-full  xl:w-1/2  rounded-xl text-sm mt-10 border-separate text-gray-400 ">
                    {
                      takeOrder.line_items.map((product)=>(
                        <section className="bg-gray-800 rounded-lg mt-1 ml-1 mr-1 font-bold  ">
                        <div className="p-3 flex gap-10 justify-between">
                          <div class="flex align-items-center">
								            <img class="rounded-full h-12 w-12  object-cover" src={product.images.at(-1).src} alt="unsplash image" />
								            <div class="ml-3">
									            <div class="">{product.name}</div>
									            <div class="text-gray-500">{product.categories.at(-1).name}</div>
								            </div>
							            </div>
                          <div className="flex justify-center items-center">{product.quantitySelected} x { formatterPeso.format(product.price)}</div>
                          <div className="p-3 flex">
                            <a href="#" className="text-gray-400 hover:text-gray-100 mx-2">
                              <img src={iconEdit} alt="edit" width={20} height={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-100 ml-2">
                              <img src={iconDelete} alt="edit" width={20} height={20} />
                            </a>
						              </div>
                        </div>
                    </section>
                      ))
                    }
                    
                </section>
                <section className='bg-slate-900 h-full  flex flex-col w-full xl:w-1/2 rounded-xl  mt-10 border-separate text-gray-400'>
                    <section className='bg-gray-800 h-96 m-1 rounded-xl flex flex-col gap-5 '>
                      <div className='flex justify-between'>
                         <h3 className="text-2xl font-serif text-white ">Total de items</h3>
                          <h3 className='text-2xl font-serif text-white'>4</h3>
                      </div>
                      <div className='flex justify-between'>
                         <h3 className="text-2xl font-serif text-white ">Total a confirmar</h3>
                          <h3 className='text-2xl font-serif text-white'>4</h3>
                      </div>
                      <div className='flex justify-center gap-5'>
                        <Button>Crear Orden</Button>
                        <Button>Limpiar Orden</Button>
                      </div>
                     
                    </section>
                    
              
               
                </section>
              </section>
        </div>
        
    )
}


 {/*  <div class="mt-2">
                    <input class="border border-gray-300 p-4 rounded w-4/6 text-base leading-4 placeholder-gray-600 text-gray-600" type="email" name="" id="" placeholder="Nombre Cliente" />
                </div> */}