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
  return (
   <div className="bg-gray-900 h-full flex items-start justify-center overflow-visible  overflow-y-hidden">
      <div className="bg-gray-800  flex-1 flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 overflow-y-hidden  max-w-6xl sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl">
        <Nav takeOrder={ takeOrder }/>
        <Screen>
          <Routes>
            <Route path='/' element={ <ScreenCategories /> }></Route>
            <Route path='newOrder' element={ <ScreenNewOrder takeOrder={takeOrder} /> }> </Route>
            <Route path='productsByCategory/:id_category' element={<ScreenProductsByCategory takeOrder={takeOrder} setTakeOrder={setTakeOrder} />}></Route> 
          </Routes>
        </Screen> 
      </div>
  </div>
  )
}

export default App;
