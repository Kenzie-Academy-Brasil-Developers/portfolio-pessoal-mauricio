import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh);
`;

export const Content = styled.div`
  width: 1120px;
  height: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  

  padding: 20px;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;