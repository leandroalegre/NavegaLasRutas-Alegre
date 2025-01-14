import './App.css';
import { Navbar } from "./components/layouts/navbar/Navbar";
import { Footer } from './components/layouts/footer/Footer';
import { ListaProps } from './components/common/ListaProps/ListaProps';
import { Saludo } from './components/pages/Saludo/Saludo';
import {ItemDetail } from './components/pages/ItemDetail/ItemDetail';

function App() {
  return (
    <div>
      <Navbar />
      <Saludo />
      <ItemDetail/>
      <Footer />
    </div>
  );
}

export default App;
