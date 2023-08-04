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
const Title = styled.h2`
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
  // Estados locales para almacenar los valores del primer nombre, segundo nombre, apellido paterno y apellido materno,
  // inicializados con los valores almacenados en el localStorage o con cadenas vacías si no hay valores almacenados.
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

  // useEffect se utiliza para guardar los valores en el localStorage cada vez que cambian.
  useEffect(() => {
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("middleName", middleName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("motherLastName", motherLastName);
  }, [firstName, middleName, lastName, motherLastName]);

  // Función que se ejecuta cuando se envía el formulario (submit), evitando el comportamiento por defecto del navegador.
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // Renderizado del componente.
  return (
    <>
      {/* BoxPrimary */}
      <BoxPrimary className="animate__animated animate__pulse">
        {/* BoxH1 */}
        <BoxH1>
          {/* Título del formulario */}
          <H1>Titulo de formulario</H1>
          {/* Reloj */}
          <Reloj>
            <AiOutlineClockCircle size={48} />
            <p>En menos de 5 minutos</p>
          </Reloj>
        </BoxH1>
        {/* Icono */}
        <AiFillFileUnknown size={90} color="white" />
      </BoxPrimary>
      {/* FormContainer */}
      <FormContainer className="animate__animated animate__pulse">
        <div>
          {/* Contenedor de la imagen del icono */}
          <img
            width="100"
            height="100"
            src="svg/iconchat.svg"
            alt="icon chat"
            className="chat"
          />
        </div> 
        <div>
          {/* Formulario */}
          <Form onSubmit={handleSubmit}>
            {/* Título del formulario */}
            <Title>¿Cuál es tu nombre?</Title>
            {/* Campo de entrada para el primer nombre */}
            <Input
              type="text"
              placeholder="Nombre"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {/* Campo de entrada para el segundo nombre */}
            <Input
              type="text"
              placeholder="Segundo nombre"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
            />  
            {/* Campo de entrada para el apellido paterno */}
            <Input
              type="text"
              placeholder="Apellido paterno"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {/* Campo de entrada para el apellido materno */}
            <Input
              type="text"
              placeholder="Apellido materno"
              value={motherLastName}
              onChange={(e) => setMotherLastName(e.target.value)}
            />
          </Form>

          {/* Renderiza PinkBox con el nombre completo solo si los campos están completos */}
          {firstName && middleName && lastName && motherLastName ? (
            <PinkBox>
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
