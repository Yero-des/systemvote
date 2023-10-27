import "./css/App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Cantidatos } from "./components/cantidatos";
import { useState } from "react";
import { useEffect } from "react";

function App() {

  const [height, setHeight] = useState();
  
  useEffect(() => {
    
    const handleResize = () => {               
  
      const navHeight = document.getElementById('nav-bar').offsetHeight;  
      setHeight(window.innerHeight - navHeight); 

    }

    const navHeight = document.getElementById('nav-bar').offsetHeight;   
    setHeight(window.innerHeight - navHeight);  

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  const cantidatos = [
    {
      nombre: "Lista 1",
      descripcion: "Esta es una pequeña descripción del grupo general",
      alcalde: "Jorge",
      img: "/src/img/foto2.jpg",
      simbolo: "/src/assets/insignia.png",
      votos: "0",
    },
    {
      nombre: "Lista 2",
      descripcion: "Esta es una pequeña descripción del grupo general",
      alcalde: "Juan",
      img: "/src/img/foto3.jpg",
      simbolo: "/src/assets/insignia.png",
      votos: "0",
    },
    {
      nombre: "Lista 3",
      descripcion: "Esta es una pequeña descripción del grupo general",
      alcalde: "Juan",
      img: "/src/img/foto4.jpg",
      simbolo: "/src/assets/insignia.png",
      votos: "0",
    }
  ];

  return (
    <>
      <nav id="nav-bar" className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-uppercase text-light" href="#">
            <div className="d-flex align-items-center">
              {/* <img src="/src/assets/insignia.png" alt="asdf" width={30} height={50}/>               */}
              Elecciones municipio escolar 2023
            </div>
            </a>
        </div>
      </nav>
      <div className="font text-center" style={{height: height}}>
        <div className="gray-content-font"></div>
        <div className="content-font">     
          <Cantidatos cantidatos={cantidatos} />
        </div>
      </div>
    </>
  );
}

export default App;
