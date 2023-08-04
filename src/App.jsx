import { useEffect, useState } from "react";
import ContactInput from "./components/ContactInput";
import DataBox from "./components/DataBox";
import DateInput from "./components/DateInput";
import FooterBar from "./components/FooterBar";
import Loader from "./components/Loader";
import NameInput from "./components/NameInput";
import NavBar from "./components/NavBar";

const App = () => {

// Simulación de carga asincrónica (puedes ajustarla según tus necesidades)
const [loading, setLoading] = useState(true);

useEffect(() => {
  // Simulación de 2 segundos de carga
  setTimeout(() => {
    setLoading(false);
  }, 2000);
}, []);


  return (
    <>
      <NavBar />

      <main className="main">
        {loading ? ( // Comprobamos si está cargando
          <Loader /> // Si está cargando, mostramos el componente Loader
        ) : ( // Si no está cargando, mostramos el contenido principal
          <div className="main__content">
            <div className="main__left">
              <NameInput />
            </div>
            <div className="main__center">
              <DateInput />
              <ContactInput />
            </div>
            <div className="main__right">
              <ContactInput />
              <DataBox />
            </div>
          </div>
        )}
      </main>

      <FooterBar />
    </>
  );
};

export default App;
