import { useState,useRef } from 'react'
import { useParams } from 'react-router-dom'
import { useQueryClient } from '@tanstack/react-query'
import TitlePage from "./globals/TitlePage"
import MainContainer from './globals/MainContainer'
import Container from './globals/Container'
import ListProducts from './Products/ListProducts'
import { formatterPeso } from './../utils'

export default function ScreenOrderEdit(){
    const [paymentSelected,setPaymentSelected] = useState({checked:'efectivo'})
    const { id_order } = useParams()
    const refInputMount = useRef(null)
    const refChangePay = useRef(null) 
    const refMountProvided = useRef(null)
    const refInputMountProvided = useRef(null)

    const handleChange = e => {
        setPaymentSelected({
          checked:e.target.value
        })
    }

    const onChangeAmount = e => {
/*         const mount = +e.target.value.replace('$','').replace('.','') 
        const change =  mount === 0 ? 0 : (mount - +orderPendingSelected.total )
        e.target.value  = formatterPeso.format(mount)
        refInputMount.current.innerText = e.target.value
        refChangePay.current.innerText = formatterPeso.format(change)  */
      }
 const queryClient = useQueryClient()

     
     
   const data = queryClient.getQueriesData({ queryKey: ['ordersPending'] }) 
    const line_items = data[0][1].find(order => order.id === Number(id_order)).line_items
    console.log(line_items) 
     /* const line_items = data[1][1].find(order => order.id === Number(id_order)) */
    /* console.log(queryClient) */
    return (
      <>
      <TitlePage>Orden</TitlePage>
      <MainContainer>
        <Container>
         <ListProducts line_items={line_items} />      
        </Container>
        <Container>b</Container>
      </MainContainer>
      </>
 /*         <div className="">
        <div className="flex justify-between items-center">
          <TitlePage>Orden # {id_order}</TitlePage>
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
          
        <div className="flex h-[calc(100vh-155px)] sm:h-[calc(100vh-200px)] lg:h-[calc(100vh-110px)] overflow-y-auto lg:justify-center">
            <section className="bg-slate-900 h-[calc(100vh-200px)] sm:h-[calc(100vh-240px)] lg:h-[calc(100vh-150px)] xl:h-[calc(100vh-150px)] overflow-y-auto w-full  lg:w-3/4 lg:justify-center  rounded-xl text-sm mt-10 border-separate text-gray-400 ">
                <section className="flex m-2  rounded flex-col justify-between bg-slate-700">
                    <h1 className="w-full text-white flex justify-center text-md lg:text-xl  ">Seleccione medio de pago</h1>
                    <div className="grid  grid-cols-3 space-x-2 rounded-xl bg-slate-900 p-2 m-1">
                        <div>
                            <input type="radio" name="option" id="1" className="peer hidden"  value="efectivo"  onChange={handleChange}  checked={paymentSelected.checked === "efectivo"} />
                            <label for="1" className="block cursor-pointer select-none rounded-xl p-2 text-center text-white peer-checked:bg-slate-700 peer-checked:font-bold   peer-checked:text-white">Efectivo</label>
                        </div>
                        <div>
                            <input type="radio" name="option" id="2" className="peer hidden" value="debito" onChange={handleChange} checked={paymentSelected.checked === "debito"} />
                            <label for="2" className="block cursor-pointer select-none rounded-xl p-2 text-center text-white peer-checked:bg-slate-700 peer-checked:font-bold text-[12px]  peer-checked:text-white">Debito</label>
                        </div>
                        <div>
                            <input type="radio" name="option" id="3" className="peer hidden" value="transferencia" onChange={handleChange}  checked={paymentSelected.checked === "transferencia"} />
                            <label for="3" className="block cursor-pointer select-none rounded-xl text-white p-2 text-center peer-checked:bg-slate-700 peer-checked:font-bold text-[12px]  peer-checked:text-white">Transferencia</label>
                        </div>
                    </div>
                </section> 
                <section className={`flex ${paymentSelected.checked !== 'efectivo' ? 'hidden' : '' } flex-nowrap w-[97%] rounded flex-col gap-1 bg-slate-700`}>
              <h1 className="w-full  text-white flex justify-center font-bold text-[12px] ">        </h1>
              <section className="flex justify-center items-center m-1 rounded-xl h-full ">
              <input ref={refInputMountProvided} onChange={onChangeAmount}  placeholder="$ 0" className="rounded-md h-12 w-full text-center text-2xl bg-slate-800 text-white font-bold" type="text" /></section>
          </section> 
            </section>
           
      </div>
  </div>  */
    )
}