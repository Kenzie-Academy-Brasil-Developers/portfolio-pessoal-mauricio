import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: calc(100%vh);
`;

export const Content = styled.div`
  width: 1120px;
  height: 100%;
  display: flex;
  align-items: start;
  flex-direction: row;
  text-align: left;
  line-height: 1.8;
  gap: 50px;
  margin-top: 20px;
  

  padding: 20px;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;




