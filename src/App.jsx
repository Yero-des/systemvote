import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Cantidatos } from './components/cantidatos';

function App() {

  const cantidatos = [
    {
      name: 'Lista 1',
      img: "lista1.png",
      votos: "0",
    },
    {
      name: 'Lista 2',
      img: "lista2.png",
      votos: "0",
    },
    {
      name: 'Lista 3',
      img: "lista3.png",
      votos: "0",
    },
    {
      name: 'Lista 4',
      img: "lista3.png",
      votos: "0",
    },
    {
      name: 'Lista 5',
      img: "lista3.png",
      votos: "0",
    },
    {
      name: 'Lista 6',
      img: "lista3.png",
      votos: "0",
    }
  ];

  return (
    <>
      <div className='container'>
        <h1>ELECCIONES MUNICIPIO ESCOLAR 2023</h1>
        <h2>INSTITUCIÓN EDUCATIVA N° 2080 ANDRES BELLO</h2>
      </div>
      <Cantidatos cantidatos={cantidatos}/>
    </>
  )
}

export default App
