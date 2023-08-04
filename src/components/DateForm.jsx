import { useEffect, useState } from "react";
import styled from "styled-components";

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

const DateInput = () => {
  // Estados locales para almacenar los valores del día, mes y año,
  // inicializados con los valores almacenados en el localStorage o con cadenas vacías si no hay valores almacenados.
  const [day, setDay] = useState(localStorage.getItem("day") || "");
  const [month, setMonth] = useState(localStorage.getItem("month") || "");
  const [year, setYear] = useState(localStorage.getItem("year") || "");

  // useEffect se utiliza para guardar el día, mes y año en el localStorage cada vez que cambian.
  useEffect(() => {
    localStorage.setItem("day", day);
    localStorage.setItem("month", month);
    localStorage.setItem("year", year);
  }, [day, month, year]);

  // Función que se ejecuta cuando se envía el formulario (submit), evitando el comportamiento por defecto del navegador.
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // Renderizado del componente.
  return (
    <FormContainer className="animate__animated animate__pulse">
      <div>
        {/* Icono */}
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
          <Title>¿Cuál es tu fecha de nacimiento?</Title>

          {/* Campo de entrada para el día */}
          <Input
            type="number"
            placeholder="Día"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />

          {/* Campo de entrada para el mes */}
          <Input
            type="text"
            placeholder="Mes"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />

          {/* Campo de entrada para el año */}
          <Input
            type="number"
            placeholder="Año"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </Form>
        
        {/* Renderiza PinkBox con la fecha completa solo si los campos de día, mes y año están completos */}
        {day && month && year ? (
          <PinkBox>
            <p>
              {day} {month} {year}
            </p>
          </PinkBox>
        ) : null}
      </div>
    </FormContainer>
  );
};

export default DateInput;
