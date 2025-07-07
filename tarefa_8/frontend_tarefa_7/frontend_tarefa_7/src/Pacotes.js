import React from "react";
import styled from "styled-components";
import PackagesGrid from "./PackagesGrid";

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  color: white;
  margin-bottom: 30px;
  font-size: 2.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const Subtitle = styled.div`
  text-align: center;
  color: white;
  font-size: 1.2rem;
  margin-top: 50px;
`;

function Pacotes(props) {
  const { dados } = props;

  if (!dados || dados.length === 0) {
    return (
      <Container>
        <Title>Pacotes de Viagem</Title>
        <Subtitle>Nenhum pacote disponível no momento</Subtitle>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Pacotes de Viagem</Title>
      <PackagesGrid dados={dados} />
    </Container>
  );
}

export default Pacotes;
