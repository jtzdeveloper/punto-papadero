import './App.css';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Nav from './components/Nav';
import { Routes, Route,Link } from 'react-router-dom';
import Screen from './components/Screen'
import ScreenCategories from './components/ScreenCategories'
import ScreenNewOrder from './components/ScreenNewOrder'
import ScreenProductsByCategory from './components/ScreenProductsByCategory'
import ScreenOrderEdit from './components/ScreenOrderEdit'
import ScreenOrdersPending from './components/ScreenOrdersPending';
import { useState } from 'react';
function App() {
  const [takeOrder, setTakeOrder] = useState({ line_items:[] })
  
  return (
   <div className="bg-gray-900 h-screen flex items-start justify-center overflow-visible  overflow-y-hidden">
      <div className="bg-gray-800  flex-1 flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 overflow-y-hidden  max-w-6xl sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl">

        <Nav takeOrder={ takeOrder }/>
        <Screen>
        <ToastContainer theme='dark' autoClose={1000} className={'w-full'} />
          <Routes>
            <Route path='/' element={ <ScreenCategories /> }></Route>
            <Route path='ordersPending' element={ <ScreenOrdersPending  /> }></Route>
            <Route path='newOrder' element={ <ScreenNewOrder takeOrder={takeOrder} setTakeOrder={setTakeOrder} /> }> </Route>
            <Route path='productsByCategory/:id_category' element={<ScreenProductsByCategory takeOrder={takeOrder} setTakeOrder={setTakeOrder} />}></Route> 
            <Route path='orderPendingEdit/:id_order' element={ <ScreenOrderEdit />}></Route>
          </Routes>
        </Screen> 
        
      </div>
  </div>
  )
}

export default App;
