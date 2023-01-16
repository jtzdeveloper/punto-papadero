import './App.css';


import Nav from './components/Nav';
import { Routes, Route,Link } from 'react-router-dom';
import Screen from './components/Screen'
import ScreenCategories from './components/ScreenCategories'
import ScreenNewOrder from './components/ScreenNewOrder'
import ScreenProductsByCategory from './components/ScreenProductsByCategory'
import { useState } from 'react';
function App() {
  const [takeOrder, setTakeOrder] = useState({ line_items:[] })
  const takesOrders = { takeOrder,setTakeOrder}
  return (
   <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 flex-1 flex flex-col space-y-5  max-w-6xl sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl">
        <Nav />
        <Screen>
          <Routes>
            <Route path='/' element={ <ScreenCategories /> }></Route>
            <Route path='newOrder' element={ <ScreenNewOrder /> }> </Route>
            <Route path='productsByCategory/:id_category' element={<ScreenProductsByCategory takeOrder={takeOrder} setTakeOrder={setTakeOrder} />}></Route>
          </Routes>
        </Screen>
      </div>
  </div>
  )
}

export default App;
