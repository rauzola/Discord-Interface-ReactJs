import React from "react";

import { Container, HastagIcon, Title, Separador, Description } from "./styles";

const ChanelInfo: React.FC = () => {
  return (
    <Container>
      <HastagIcon />

      <Title>Chat-livre</Title>

      <Separador />

      <Description>Canal aberto para conversas</Description>
    </Container>
  );
};

export default ChanelInfo;
