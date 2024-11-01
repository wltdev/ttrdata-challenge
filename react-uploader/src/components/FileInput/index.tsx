import { FC } from "react";
import { Container, Input, Label } from "./styles";

type Props = {
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FileInput: FC<Props> = ({ label, onChange }) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Input type="file" onChange={onChange} />
    </Container>
  );
};
