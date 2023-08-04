import { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiFillFileUnknown } from "react-icons/ai";

const BoxPrimary = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 50px;
  background: var(--primaryColor);
  border-radius: 8px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const H1 = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: var(--titleColor);
  font-family: var(--primaryFont);
`;
const BoxH1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

const Reloj = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--primaryFont);
  font-weight: 700;
  display: flex;
`;
const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: var(--formColor);
  padding: 15px 15px 0 15px;
  border-radius: 6px;
  box-shadow: 0 0 54px -29px;

  @media (min-width: 768px) {
    min-width: 287px;
  }
`;

const Input = styled.input`
  border: 2px solid #d8d8d8;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  background: none;
  color: var(--titleColor);
  text-transform: capitalize;
  font-family: var(--primaryFont);
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
  font-family: var(--primaryFont);
  font-weight: 400;
  border-radius: 4px;
  text-transform: capitalize;
  text-align: left;
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
    <>
      <BoxPrimary className="animate__animated animate__pulse">
        <BoxH1>
          <H1>Titulo de formulario</H1>
        <Reloj>
          <AiOutlineClockCircle size={48} />
          <p>En menos de 5 minutos</p>
        </Reloj>
        </BoxH1>

        <AiFillFileUnknown size={90} color="white" />
      </BoxPrimary>
      <FormContainer className="animate__animated animate__pulse">
        <div>
          <img
            width="100"
            height="100"
            src="svg/iconchat.svg"
            alt="icon chat"
            className="chat"
          />
        </div>
        <div>
          <Form onSubmit={handleSubmit}>
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
          </Form>

          {firstName && middleName && lastName && motherLastName ? (
            <PinkBox>
              {/* <p>Tus datos:</p> */}
              <p>
                {firstName} {middleName} {lastName} {motherLastName}
              </p>
            </PinkBox>
          ) : null}
        </div>
      </FormContainer>
    </>
  );
};

export default NameInput;
