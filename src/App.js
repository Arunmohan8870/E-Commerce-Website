import Second from './componets/Second';
import Header from "./componets/First";
import Fooder from "./componets/Fooder";
import Product from './componets/Product';
import "./App.css";
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";     //change the title 
import Success from './cardStore/Success';
import Login from './cardStore/Login';
import Create from './cardStore/Create';
import Admin from './cardStore/Admin';
import Phone from './items/Phone';
import Product2 from './items/Product2';
import Lap from './laptop/Lap';
import Product3 from './laptop/Product3';
import Bikes from './Bikes/Bikes';
import Product4 from './Bikes/Product4';
import Emicard from './cardStore/Emicard';

export default function App() {
  return (
    <Router>  {/* Parent Element */}
      <div className="App">
        <HelmetProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Second />} />
            <Route path="/Product/:id" element={<Product />} />
            <Route path='/Success' element={<Success />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Create' element={<Create />} />
            <Route path='/Admin' element={<Admin />} />
            <Route path='/phone' element={<Phone />} />
            <Route path='/product2/:id' element={<Product2 />} />
            <Route path='/lap' element={<Lap />} />
            <Route path='/product3/:id' element={<Product3 />} />
            <Route path='/Bikes' element={<Bikes />} />
            <Route path='/product4/:id' element={<Product4 />} />
            <Route path='/Emicard' element={<Emicard />} />
            
          </Routes>
          <Fooder />
        </HelmetProvider>
      </div>
    </Router>
    // </Provider>    
  )
}