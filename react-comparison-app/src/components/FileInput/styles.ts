import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Label = styled.label`
  color: white;
  font-size: 16px;
  font-weight: 600;
`;

export const Input = styled.input`
  border: 1px solid white;
  width: 100%;
  height: 100%;
  padding: 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
