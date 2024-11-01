import { FC } from "react";
import { Container, Title } from "./styles";

type Props = {
  loading?: boolean;
  loadingText?: string;
  title: string;
  onClick: () => void;
};

export const Button: FC<Props> = ({ title, onClick, loading, loadingText }) => {
  return (
    <Container onClick={onClick} disabled={loading}>
      <Title>{loading ? loadingText ?? "Sending..." : title}</Title>
    </Container>
  );
};
