// import React, { useState, useEffect } from 'react';
// import Home from './views/home/Home';
// // import Header from './componentes/header/Header';
// import Footer from './componentes/footer/Footer';
// // import Approutes from "./Routes/Approutes";
// import axios from 'axios';

// function App() {

//   const [data, setData]= useState([])



//  useEffect(() =>{
//  const products =async() =>{
//   const response = await axios.get("http://localhost:8080/products");
//   setDatos(response.data.info)
//  }

//  products()

//  }, [])
    
      

//       console.log(datos);
    

//   return (
//     <div>
    
//       {datos.map((dato)=>(

//       <div key={"dato._id"}>
//      <h2>{dato.nombre}</h2>
//      <img src={dato.img} alt="" />
//       </div>

//       ))}
//       <button>Click Me</button>
//       {/* <Header/> */}
//       <Home/>
//       <Footer/>
//       {/* <Approutes /> */}
//     </div>
//   )
// }

// export default App;
import React, { useState, useEffect } from 'react';
import Home from './views/home/Home';
// import Header from './componentes/header/Header';
import Footer from './componentes/footer/Footer';
// import Approutes from "./Routes/Approutes";
import axios from 'axios';

function App() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/products");
        setDatos(response.data.info);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  console.log(datos);

  return (
    <div>
    {datos.map((dato) => (
      <div key={dato._id}>
        <h2>{dato.nombre}</h2>
        <img src={dato.img} alt="converse_cañaalta" width='200' height='200'/>
        <h3>{dato.valor}</h3>
        <button>Click Me</button>
      </div>
    ))}

  
     
      {/* <Header/> */}
      <Home/>
      <Footer/>
      {/* <Approutes /> */}
    </div>
  );
}

export default App;
