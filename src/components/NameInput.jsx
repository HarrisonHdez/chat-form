// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { FaClock } from "react-icons/fa";
const Form = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const Input = styled.input`
  border: 2px solid #d8d8d8;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  background: none
  color: var(--titleColor);
  text-transform: capitalize;
`;
const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: var(--titleColor);
  font-family: var(--primaryFont);
  padding: 0 0 15px;
`;
const PinkBox = styled.div`
  background-color: var(--primaryColor);
  padding: 10px;
  margin-top: 10px;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  border-radius: 4px;
  text-transform: capitalize;
`;

const NameInput = () => {
  const [firstName, setFirstName] = useState(
    localStorage.getItem("firstName") || ""
  );
  const [middleName, setMiddleName] = useState(
    localStorage.getItem("middleName") || ""
  );
  const [lastName, setLastName] = useState(
    localStorage.getItem("lastName") || ""
  );
  const [motherLastName, setMotherLastName] = useState(
    localStorage.getItem("motherLastName") || ""
  );

  useEffect(() => {
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("middleName", middleName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("motherLastName", motherLastName);
  }, [firstName, middleName, lastName, motherLastName]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="prueba">
      <div className="prueba2">
        <h1>Titulo de formulario</h1>

        <FaClock size={40} />
        <p>En menos de 5 minutos</p>
      </div>

      <Form onSubmit={handleSubmit}>
        <div>
          <img
            width="100"
            height="100"
            src="svg/iconchat.svg"
            alt="icon chat"
          />
        </div>

        <div>
          <div className="prueba3">
            <Title>¿Cuál es tu nombre?</Title>
            <Input
              type="text"
              placeholder="Nombre"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Segundo nombre"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Apellido paterno"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Apellido materno"
              value={motherLastName}
              onChange={(e) => setMotherLastName(e.target.value)}
            />
          </div>
          {firstName && middleName && lastName && motherLastName ? (
            <PinkBox>
              {/* <p>Tus datos:</p> */}
              <p>
                {firstName} {middleName} {lastName} {motherLastName}
              </p>
            </PinkBox>
          ) : null}
        </div>
      </Form>
    </div>
  );
};

export default NameInput;
