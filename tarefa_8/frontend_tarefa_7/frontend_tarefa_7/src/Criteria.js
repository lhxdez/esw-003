import React, { useState } from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 20px;
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 16px 20px 16px 50px;
  font-size: 1.1rem;
  border: none;
  border-radius: 50px;
  background: white;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  &::placeholder {
    color: #999;
    font-style: italic;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  font-size: 1.2rem;
`;

const ClearButton = styled.button`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  font-size: 1.1rem;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: #f0f0f0;
    color: #666;
  }
`;

const SearchLabel = styled.label`
  display: block;
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 15px;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

function Criteria({ setCriteria }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setCriteria(value);
  };

  const handleClear = () => {
    setSearchTerm("");
    setCriteria("");
  };

  return (
    <SearchContainer>
      <SearchWrapper>
        <SearchLabel>Pesquisar pacotes por descrição ou localidade</SearchLabel>
        <div style={{ position: "relative" }}>
          <SearchIcon>🔍</SearchIcon>
          <SearchInput
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Digite sua pesquisa aqui..."
          />
          {searchTerm && (
            <ClearButton onClick={handleClear} title="Limpar pesquisa">
              ✕
            </ClearButton>
          )}
        </div>
      </SearchWrapper>
    </SearchContainer>
  );
}

export default Criteria;
