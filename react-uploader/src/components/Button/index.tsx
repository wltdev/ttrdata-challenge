import { FC } from "react";
import { Container, Title } from "./styles";

type Props = {
  loading?: boolean;
  title: string;
  onClick: () => void;
};

export const Button: FC<Props> = ({ title, onClick, loading }) => {
  return (
    <Container onClick={onClick} disabled={loading}>
      <Title>{loading ? "Sending..." : title}</Title>
    </Container>
  );
};
