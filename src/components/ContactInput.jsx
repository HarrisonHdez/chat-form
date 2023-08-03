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
              {/* <p>Tus datos de contacto:</p> */}
              <p>
                Correo electrónico: {email}
                <br />
                Teléfono celular: {phone}
              </p>
            </PinkBox>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ContactInput;

// import { useEffect, useState } from "react";
// import styled from "styled-components";
// import PropTypes from "prop-types";

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Input = styled.input`
//   border: 2px solid pink;
//   padding: 10px;
//   margin-bottom: 10px;
// `;

// const PinkBox = styled.div`
//   background-color: pink;
//   padding: 10px;
//   margin-top: 10px;
//   text-align: center;
// `;

// const ContactInput = ({ onDataSubmit }) => {
//   const [email, setEmail] = useState(localStorage.getItem("email") || "");
//   const [phone, setPhone] = useState(localStorage.getItem("phone") || "");

//   useEffect(() => {
//     localStorage.setItem("email", email);
//     localStorage.setItem("phone", phone);
//   }, [email, phone]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onDataSubmit({ email, phone });
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <p>Datos de contacto:</p>
//       <Input
//         type="email"
//         placeholder="Correo electrónico"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <Input
//         type="tel"
//         placeholder="Teléfono celular"
//         value={phone}
//         onChange={(e) => setPhone(e.target.value)}
//       />

//       {email && phone ? (
//         <PinkBox>
//           <p>Tus datos de contacto:</p>
//           <p>
//             Correo electrónico: {email}
//             <br />
//             Teléfono celular: {phone}
//           </p>
//         </PinkBox>
//       ) : null}
//     </Form>
//   );
// };

// ContactInput.propTypes = {
//   onDataSubmit: PropTypes.func.isRequired,
// };
// export default ContactInput;
// import { useEffect, useState } from "react";
// import styled from "styled-components";
// import PropTypes from "prop-types";

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Input = styled.input`
//   border: 2px solid pink;
//   padding: 10px;
//   margin-bottom: 10px;
// `;

// const PinkBox = styled.div`
//   background-color: pink;
//   padding: 10px;
//   margin-top: 10px;
//   text-align: center;
// `;

// const ContactInput = ({ onDataSubmit }) => {
//   const [email, setEmail] = useState(localStorage.getItem("email") || "");
//   const [phone, setPhone] = useState(localStorage.getItem("phone") || "");

//   useEffect(() => {
//     localStorage.setItem("email", email);
//     localStorage.setItem("phone", phone);
//   }, [email, phone]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onDataSubmit({ email, phone });
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <p>Datos de contacto:</p>
//       <Input
//         type="email"
//         placeholder="Correo electrónico"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <Input
//         type="tel"
//         placeholder="Teléfono celular"
//         value={phone}
//         onChange={(e) => setPhone(e.target.value)}
//       />

//       {email && phone ? (
//         <PinkBox>
//           <p>Tus datos de contacto:</p>
//           <p>
//             Correo electrónico: {email}
//             <br />
//             Teléfono celular: {phone}
//           </p>
//         </PinkBox>
//       ) : null}
//     </Form>
//   );
// };

// ContactInput.propTypes = {
//   onDataSubmit: PropTypes.func.isRequired,
// };
// export default ContactInput;

// import { useEffect, useState } from "react";
// import styled from "styled-components";
// import PropTypes from "prop-types";

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Input = styled.input`
//   border: 2px solid pink;
//   padding: 10px;
//   margin-bottom: 10px;
// `;

// const PinkBox = styled.div`
//   background-color: pink;
//   padding: 10px;
//   margin-top: 10px;
//   text-align: center;
// `;

// const ContactInput = ({ onDataSubmit }) => {
//   const [email, setEmail] = useState(localStorage.getItem("email") || "");
//   const [phone, setPhone] = useState(localStorage.getItem("phone") || "");

//   useEffect(() => {
//     localStorage.setItem("email", email);
//     localStorage.setItem("phone", phone);
//   }, [email, phone]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onDataSubmit({ email, phone });

//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <p>Datos de contacto:</p>
//       <Input
//         type="email"
//         placeholder="Correo electrónico"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <Input
//         type="tel"
//         placeholder="Teléfono celular"
//         value={phone}
//         onChange={(e) => setPhone(e.target.value)}
//       />

//       {email && phone ? (
//         <PinkBox>
//           <p>Tus datos de contacto:</p>
//           <p>
//             Correo electrónico: {email}
//             <br />
//             Teléfono celular: {phone}
//           </p>
//         </PinkBox>
//       ) : null}
//     </Form>
//   );
// };

// ContactInput.propTypes = {
//   onDataSubmit: PropTypes.func.isRequired,
// };
// export default ContactInput;
// // import { useEffect, useState } from "react";
// import { useState } from "react";
// import styled from "styled-components";
// import PropTypes from "prop-types";

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Input = styled.input`
//   border: 2px solid pink;
//   padding: 10px;
//   margin-bottom: 10px;
// `;

// const PinkBox = styled.div`
//   background-color: pink;
//   padding: 10px;
//   margin-top: 10px;
//   text-align: center;
// `;

// const ContactInput = ({ onDataSubmit }) => {
//   // const [email, setEmail] = useState(localStorage.getItem("email") || "");
//   // const [phone, setPhone] = useState(localStorage.getItem("phone") || "");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");

//   // useEffect(() => {
//   //   localStorage.setItem("email", email);
//   //   localStorage.setItem("phone", phone);
//   // }, [email, phone]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onDataSubmit({ email, phone });

//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <p>Datos de contacto:</p>
//       <Input
//         type="email"
//         placeholder="Correo electrónico"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <Input
//         type="tel"
//         placeholder="Teléfono celular"
//         value={phone}
//         onChange={(e) => setPhone(e.target.value)}
//       />

//       {email && phone ? (
//         <PinkBox>
//           <p>Tus datos de contacto:</p>
//           <p>
//             Correo electrónico: {email}
//             <br />
//             Teléfono celular: {phone}
//           </p>
//         </PinkBox>
//       ) : null}
//     </Form>
//   );
// };

// ContactInput.propTypes = {
//   onDataSubmit: PropTypes.func.isRequired, // Validación de la función onDataSubmit
// };
// export default ContactInput;
