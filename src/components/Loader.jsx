import styled from "styled-components";

const LoaderBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  z-index: 9999; /* Valor alto para asegurar que se vea por encima de todo */
`;

const Loader = () => {
  return (
    <LoaderBox>
      <img width="150" height="150" src="/gif.gif" alt="Loading..." />
    </LoaderBox>
  );
};

export default Loader;