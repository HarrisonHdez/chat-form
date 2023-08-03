import ContactInput from "./components/ContactInput";
import DataBox from "./components/DataBox";
import DateInput from "./components/DateInput";
import FooterBar from "./components/FooterBar";
import NameInput from "./components/NameInput";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />

      <main className="main">
        <div className="main-prueba">
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
      </main>

      <FooterBar />
    </>
  );
};

export default App;

// import { useState } from 'react';
// import styled from 'styled-components';
// import NameInput from './components/NameInput';
// import DateInput from './components/DateInput';
// import ContactInput from './components/ContactInput';
// import DataBox from './components/DataBox';

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin: 50px;
// `;

// const StyledButton = styled.button`
//   background-color: pink;
//   color: white;
//   border: none;
//   padding: 10px 20px;
//   border-radius: 5px;
//   cursor: pointer;
//   margin-top: 20px;
// `;

// const PinkBox = styled.div`
//   background-color: pink;
//   padding: 10px;
//   margin-top: 10px;
// `;

// function App() {
//   const [formData, setFormData] = useState({});
//   const [showAllData, setShowAllData] = useState(false);

//   const handleSubmit = (question, answer) => {
//     setFormData((prevData) => ({ ...prevData, [question]: answer }));
//   };

//   const handleStartClick = () => {
//     setShowAllData(true);
//   };

//   return (
//     <Container>
//       <NameInput onSubmit={handleSubmit} />
//       <DateInput onSubmit={handleSubmit} />
//       <ContactInput onSubmit={handleSubmit} />

//       {/* Mostrar todos los datos juntos en un cuadro rosado */}
//       {showAllData && (
//         <PinkBox>
//           {Object.entries(formData).map(([question, answer]) => (
//             <p key={question}>
//               {question}: {answer}
//             </p>
//           ))}
//         </PinkBox>
//       )}

//       {/* Mostrar cada dato en su propio cuadro */}
//       {Object.entries(formData).map(([question, answer]) => (
//         <DataBox key={question} data={`${question}: ${answer}`} />
//       ))}

//       <StyledButton onClick={handleStartClick}>Iniciar</StyledButton>
//     </Container>
//   );
// }

// export default App;

// import { useState } from 'react';
// import styled from 'styled-components';
// import NameInput from './components/NameInput';
// import DateInput from './components/DateInput';
// import ContactInput from './components/ContactInput';
// import DataBox from './components/DataBox'; // Importamos el componente DataBox

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin: 50px;
// `;

// const PinkBox = styled.div`
//   background-color: pink;
//   padding: 10px;
//   margin-top: 10px;
// `;

// function App() {
//   const [formData, setFormData] = useState({});
//   const [showAllData, setShowAllData] = useState(false); // Nuevo estado para controlar si se muestra todos los datos juntos

//   const handleSubmit = (question, answer) => {
//     setFormData((prevData) => ({ ...prevData, [question]: answer }));
//   };

//   const handleStartClick = () => {
//     setShowAllData(true);
//   };

//   return (
//     <Container>
//       <NameInput onSubmit={handleSubmit} />
//       <DateInput onSubmit={handleSubmit} />
//       <ContactInput onSubmit={handleSubmit} />

//       {/* Mostrar todos los datos juntos en un cuadro rosado */}
//       {showAllData && (
//         <PinkBox>
//           {Object.entries(formData).map(([question, answer]) => (
//             <p key={question}>
//               {question}: {answer}
//             </p>
//           ))}
//         </PinkBox>
//       )}

//       {/* Mostrar cada dato en su propio cuadro */}
//       {Object.entries(formData).map(([question, answer]) => (
//         <DataBox key={question} data={`${question}: ${answer}`} />
//       ))}

//       <button onClick={() => {
//         setFormData({});
//         setShowAllData(false); // Restauramos el estado para ocultar los datos juntos al hacer clic en el botón "Iniciar"
//       }}>Iniciar</button>
//     </Container>
//   );
// }

// export default App;
