import { useState, useEffect } from "react";
import styled from "styled-components";
import Pacotes from "./Pacotes.js";
import Criteria from "./Criteria.js";
import { loadPacotes } from "./stub.js";

const AppContainer = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  font-family: "Arial", sans-serif;
`;

function App() {
  const [criteria, setCriteria] = useState("");
  const [dados, setData] = useState([]);

  const onCriteriaChange = () => {
    const fetchData = async () => {
      const data = await loadPacotes(criteria);
      console.log(`Pacotes carregados : ${JSON.stringify(data)}`);
      setData(data);
    };
    fetchData();
  };

  useEffect(onCriteriaChange, [criteria]);

  return (
    <AppContainer>
      <Criteria setCriteria={setCriteria} />
      <Pacotes dados={dados} />
    </AppContainer>
  );
}

export default App;
