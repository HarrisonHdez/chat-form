import { useState } from "react"; 
import styled from "styled-components";

const DataBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 30px;
`;

const BoxText = styled.div`
  background-color: #f0f0f0;
  max-width: 287px;
`;

const Text = styled.p`
  padding: 10px;
  margin-top: 10px;
  text-align: center;
  font-family: var(--primaryFont);
  font-weight: 400;
  border-radius: 4px;
  text-transform: capitalize;
  text-align: left;
`;

const PinkBox = styled.div`
  background-color: var(--primaryColor);
  padding: 10px;
  text-align: center;
  font-family: var(--primaryFont);
  font-weight: 400;
  border-radius: 4px;
  text-transform: capitalize;
  text-align: left;
  padding: 30px;
`;

const Button = styled.button`
  background-color: var(--buttonColor);
  display: inline-flex;
  padding: 10px 80px;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: var(--primaryFont);
  font-weight: 700;
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: center;
`;

// Componente principal llamado DataBox.
const DataBox = () => {
  // El componente utiliza el hook useState de React para gestionar su estado.
  const [showData, setShowData] = useState(false); // Una variable de estado para controlar si se muestra la información o no.
  const [data, setData] = useState({
    // Un objeto que contiene varios campos de datos, inicializados con valores vacíos.
    email: "",
    phone: "",

    day: "",
    month: "",
    year: "",

    firstName: "",
    middleName: "",
    lastName: "",
    motherLastName: "",
  });

  // Esta función se activa cuando se hace clic en el botón "Iniciar".
  // Recupera datos del localStorage y actualiza el estado para mostrar los datos.
  const handleShowData = () => {
    const email = localStorage.getItem("email") || "";
    const phone = localStorage.getItem("phone") || "";

    const day = localStorage.getItem("day") || "";
    const month = localStorage.getItem("month") || "";
    const year = localStorage.getItem("year") || "";

    const firstName = localStorage.getItem("firstName") || "";
    const middleName = localStorage.getItem("middleName") || "";
    const lastName = localStorage.getItem("lastName") || "";
    const motherLastName = localStorage.getItem("motherLastName") || "";

    // Actualiza el estado con los datos recuperados.
    setData({
      email,
      phone,

      day,
      month,
      year,

      firstName,
      middleName,
      lastName,
      motherLastName,
    });
    setShowData(true); // Establece showData en true para renderizar los datos en PinkBox.
  };

  // La interfaz de usuario del componente se define renderizando los componentes estilizados.
  return (
    <DataBoxContainer className="animate__animated animate__pulse">
      <BoxText>
        <Text>Si tus datos son correctos por favor continuemos</Text>
      </BoxText>

      <Button onClick={handleShowData}>Iniciar</Button>
      {showData && (
        <PinkBox>
          <p>
            Fecha de nacimiento: {data.day} {data.month} {data.year}
            <br />
            Correo electrónico: {data.email}
            <br />
            Teléfono celular: {data.phone}
            <br />
            Nombre: {data.firstName} {data.middleName} {data.lastName}{" "}
            {data.motherLastName}
          </p>
        </PinkBox>
      )}
    </DataBoxContainer>
  );
};

export default DataBox;
