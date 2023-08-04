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

const ContactInput = () => {
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [phone, setPhone] = useState(localStorage.getItem("phone") || "");

  useEffect(() => {
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
  }, [email, phone]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
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
          <Title>Datos de contactos</Title>
          <Input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="tel"
            placeholder="Teléfono celular"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form>
        {email && phone ? (
          <PinkBox>
            <p>
              Correo electrónico: {email}
              <br />
              Teléfono celular: {phone}
            </p>
          </PinkBox>
        ) : null}
      </div>
    </FormContainer>
  );
};

export default ContactInput;
