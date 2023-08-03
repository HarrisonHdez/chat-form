// import { useEffect, useState } from 'react';
import { useEffect, useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: var(--formColor);
  padding: 15px 15px 0 15px;
  border-radius: 6px;
  min-width: 287px;
  box-shadow: 0 0 54px -29px;
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

const DateInput = () => {
  const [day, setDay] = useState(localStorage.getItem("day") || "");
  const [month, setMonth] = useState(localStorage.getItem("month") || "");
  const [year, setYear] = useState(localStorage.getItem("year") || "");

  useEffect(() => {
    localStorage.setItem("day", day);
    localStorage.setItem("month", month);
    localStorage.setItem("year", year);
  }, [day, month, year]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="pruebaform animate__animated animate__pulse">
        <div>
          <img
            width="100"
            height="100"
            src="svg/iconchat.svg"
            alt="icon chat"
            className="chat"
          />
        </div>
        <div className="prueba100">
          <Form onSubmit={handleSubmit}>
            <Title>¿Cuál es tu fecha de nacimiento?</Title>

            <Input
              type="number"
              placeholder="Día"
              value={day}
              onChange={(e) => setDay(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Agosto"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            />
            <Input
              type="number"
              placeholder="Año"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </Form>

          {day && month && year ? (
            <PinkBox>
              <p>
                {day} {month} {year}
              </p>
            </PinkBox>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default DateInput;
