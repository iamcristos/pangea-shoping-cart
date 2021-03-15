import styled from 'styled-components';

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid grey;
  margin: auto;
  padding: 50px 20px;
  border-radius: 20px;
  box-shadow: 1px 1px 1px 1px #f2f2f2;
  background-color: #e2e6e3;
  font-family: 'bau-regular';
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px 5px;
  font-family: 'bau-regular';
  img {
    width: 70px;
    height: 70px;
  }
  h2,
  p {
    text-align: center;
    font-weight: 300;
    font-size: 13px;
  }
  p {
    margin: 5px 0;
  }
`;

export const CardButton = styled.button`
  border: 1px solid;
  background-color: ${(props) => props.backgroundColor || '#4b5548'};
  font-size: 13px;
  padding: 10px;
  color: ${(props) => props.color || '#fff'};
  width: ${(props) => props.width || '20%'};
  margin: 0 -5px;
  margin-bottom: ${(props) => props.marginBottom || 0};
  text-align: center;
  font-family: 'bau-regular';
  font-weight: 600;
  outline: none;
  cursor: pointer;
`;

export const CartCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 5px;
  width: 85%;
  padding: 5px;
  background-color: #fff;
  margin: 10px 5px;
    width: 90%;
    padding: 5px;
    margin: 10px -5px;
    
  div {
    p, div {
      font-family: 'bau-regular';
      font-size: 13px;
    }
    div {
      cursor: pointer;
    }
  }
`;

export const CartItemContainer = styled.div`
  display: flex;
  justify-content: 'space-around';
`;

export const ControlDiv = styled.div`
  border: 1px solid;
  width: 80px;
  height: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Btn = styled.div`
  width: 10px;
  border: none;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.column || 'row'};
  background-color: '#e2e6e3';
  height: ${(props) => props.height || 'unset'};
  margin: ${(props) => props.margin || 'unset'};
  select {
    padding: 5px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 50%;
  align-items: center;
  @media only screen and (max-width: 550px) {
    width: 100%;
    margin-bottom: 10px;
  }
  p {
    @media only screen and (max-width: 550px) {
    font-size: 12px;
  }
  }
  span {
    border-radius: 50%;
    border: 1px solid rgb(198, 204, 199);
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    svg {
      transform: rotate(180deg);
    }
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0px -5px;
    width: 85%;
    font-family: 'bau-regular';
    font-size: 13px;
  }
`;

export const CartImage = styled.img`
  width: 20px;
`;

export const CartTop = styled.div`
`;

export const CartBottom = styled.div`
margin-bottom: 25px;
`;
export const CartContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex: 1 auto;
`;

export const CartContent = styled.div`
  display: flex;
  justify-content: 'space-between';
  padding: '5px';
  @media only screen and (max-width: 550px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
