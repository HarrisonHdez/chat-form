
// import { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  border: 2px solid pink;
  padding: 10px;
  margin-bottom: 10px;
`;

const PinkBox = styled.div`
  background-color: pink;
  padding: 10px;
  margin-top: 10px;
  text-align: center;
`;

const DateInput = () => {
  const [day, setDay] = useState(
    localStorage.getItem("day") || ""
  );
  const [month, setMonth] = useState(
    localStorage.getItem("month") || ""
  );
  const [year, setYear] = useState(
    localStorage.getItem("year") || ""
  );

  useEffect(() => {
    localStorage.setItem("day", day);
    localStorage.setItem("month", month);
    localStorage.setItem("year", year);
  }, [day, month, year]);

  const handleSubmit = (event) => {
    event.preventDefault();
   
  };

  return (
    <Form onSubmit={handleSubmit}>
      <p>¿Cuál es tu fecha de nacimiento?</p>
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

      {day && month && year ? (
        <PinkBox>
          <p>Tu fecha de nacimiento:</p>
          <p>
            {day}/{month}/{year}
          </p>
        </PinkBox>
      ) : null}
    </Form>
  );
};

export default DateInput;






