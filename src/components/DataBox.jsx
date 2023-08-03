import { useState } from "react";
import styled from "styled-components";

const PinkBox = styled.div`
  background-color: pink;
  padding: 10px;
  margin-top: 10px;
  text-align: center;
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
`;

const DataBox = () => {
  const [showData, setShowData] = useState(false);
  const [data, setData] = useState({
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
    setShowData(true);
  };

  return (
    <div>
      <Button onClick={handleShowData}>Iniciar</Button>
      {showData && (
        <PinkBox>
          {/* <p>Tus datos de contacto:</p> */}
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
    </div>
  );
};

export default DataBox;
