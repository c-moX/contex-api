import { createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Shipment from './Components/Shipment/Shipment';

export const CategoryContext = createContext(); // Context api

function App() {
  const [category, setCategory] = useState('Laptop');

  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      <div>
        <h1>This is App</h1>
        <p>App Value: {category}</p>
      </div>
      <div>
        <Header></Header>
        <Home></Home>
        <Shipment></Shipment>
      </div>
    </CategoryContext.Provider>
  );
}

export default App;
