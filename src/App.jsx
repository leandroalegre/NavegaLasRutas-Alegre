import './App.css';
import { Navbar } from "./components/layouts/navbar/Navbar";
import { Footer } from './components/layouts/footer/Footer';
import { ListaProps } from './components/common/ListaProps/ListaProps';
import { Saludo } from './components/pages/Saludo/Saludo';

function App() {
  return (
    <div>
      <Navbar />
      <Saludo />
      <Footer />
    </div>
  );
}

export default App;
