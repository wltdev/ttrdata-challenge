import styled from "styled-components";

export const Container = styled.button`
  border-radius: 8px;
  width: 100%;

  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;

  transition: border-color 0.25s;

  &:hover {
    border-color: #646cff;
  }
`;

export const Title = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 600;
`;
