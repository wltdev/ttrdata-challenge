import styled from "styled-components";

export const Container = styled.button`
  border-radius: 8px;
  width: 100%;

  border: 1px solid white;
  padding: 0.6em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #706f6f;
  transition: border-color 0.25s;

  &:hover {
    background-color: #1a1a1a;
    border-color: #646cff;

    p {
      color: #646cff;
    }
  }
`;

export const Title = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 600;
`;
