import React from 'react';
import Home from './views/home/Home';
// import Header from './componentes/header/Header';
import Footer from './componentes/footer/Footer';
// import Approutes from "./Routes/Approutes";
import axios from 'axios';

function App() {
  const products = async () => {
    try {
      const response = await axios.get("http://localhost:8080/products");
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  return (
    <>
      <button onClick={products}>Click Me</button>
      {/* <Header/> */}
      <Home/>
      <Footer/>
      {/* <Approutes /> */}
    </>
  )
}

export default App;
