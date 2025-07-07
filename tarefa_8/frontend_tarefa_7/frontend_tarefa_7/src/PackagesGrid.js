import React, { useState } from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const PackageCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 35px rgba(0,0,0,0.2);
  }
`;

const PackageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const LocationBadge = styled.span`
  background: linear-gradient(45deg, #ff6b6b, #ee5a24);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.9rem;
`;

const Price = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #2d3436;
  
  &::before {
    content: 'R$ ';
    font-size: 1rem;
    color: #636e72;
  }
`;

const Description = styled.p`
  color: #636e72;
  line-height: 1.6;
  margin-bottom: 15px;
  font-size: 0.95rem;
`;

const ExpandButton = styled.button`
  background: linear-gradient(45deg, #74b9ff, #0984e3);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(45deg, #0984e3, #74b9ff);
    transform: scale(1.05);
  }
`;

const ItemsContainer = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px solid #ddd;
`;

const ItemCard = styled.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  border-left: 4px solid ${props => props.type === 'hotel' ? '#e17055' : props.type === 'flight' ? '#74b9ff' : '#00b894'};
`;

const ItemType = styled.div`
  font-weight: bold;
  color: ${props => props.type === 'hotel' ? '#e17055' : props.type === 'flight' ? '#74b9ff' : '#00b894'};
  font-size: 0.8rem;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

const ItemDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemInfo = styled.div`
  flex: 1;
`;

const ItemPrice = styled.div`
  font-weight: bold;
  color: #2d3436;
  font-size: 1.1rem;
  
  &::before {
    content: 'R$ ';
    font-size: 0.9rem;
    color: #636e72;
  }
`;

function PackagesGrid({ dados }) {
    const [expandedCards, setExpandedCards] = useState(new Set());

    const toggleCard = (index) => {
        const newExpanded = new Set(expandedCards);
        if (newExpanded.has(index)) {
            newExpanded.delete(index);
        } else {
            newExpanded.add(index);
        }
        setExpandedCards(newExpanded);
    };

    const getItemConfig = (item) => {
        const key = Object.keys(itemConfig).find(key =>
            key !== 'default' && item.hasOwnProperty(key)
        );
        return itemConfig[key] || itemConfig.default;
    };

    const itemConfig = {
        nomeHotel: {
            type: 'hotel',
            label: 'Hotel',
            primaryField: 'nomeHotel',
            secondaryField: 'endereco'
        },
        companiaAerea: {
            type: 'flight',
            label: 'Voo',
            primaryField: 'companiaAerea',
            secondaryField: 'numeroVoo',
            secondaryPrefix: 'Voo: '
        },
        marca: {
            type: 'car',
            label: 'Veículo',
            primaryField: 'marca',
            secondaryField: 'modelo'
        },
        default: {
            type: 'other',
            label: 'Serviço',
            customRender: () => <div>Serviço incluído</div>
        }
    };

    const renderItemDetails = (item, config) => {
        if (config.customRender) {
            return config.customRender();
        }
        
        return (
            <>
                <div><strong>{item[config.primaryField]}</strong></div>
                <div style={{ fontSize: '0.9rem', color: '#636e72' }}>
                    {config.secondaryPrefix || ''}{item[config.secondaryField]}
                </div>
            </>
        );
    };



    return (
        <Grid>
            {dados.map((pacote, index) => (
                <PackageCard key={index}>
                    <PackageHeader>
                        <LocationBadge>{pacote.localidade.descricao}</LocationBadge>
                        <Price>{pacote.valor.toFixed(2)}</Price>
                    </PackageHeader>

                    <Description>{pacote.descricao}</Description>

                    <ExpandButton onClick={() => toggleCard(index)}>
                        {expandedCards.has(index) ? 'Ocultar Detalhes' : 'Ver Detalhes'}
                    </ExpandButton>            
                    
                    {expandedCards.has(index) && (
                        <ItemsContainer>
                            {pacote.items.map((item, itemIndex) => {
                                const config = getItemConfig(item);
                                return (
                                    <ItemCard key={itemIndex} type={config.type}>
                                        <ItemType type={config.type}>{config.label}</ItemType>
                                        <ItemDetails>
                                            <ItemInfo>
                                                {renderItemDetails(item, config)}
                                            </ItemInfo>
                                            <ItemPrice>{item.preco.toFixed(2)}</ItemPrice>
                                        </ItemDetails>
                                    </ItemCard>
                                );
                            })}
                        </ItemsContainer>
                    )}
                </PackageCard>
            ))}
        </Grid>
    );
}

export default PackagesGrid;
