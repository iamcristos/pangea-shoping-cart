import React from 'react';

import CartItem from './CartItem';
import Price from './Price';
import {
  CardButton,
  CartBottom,
  CartContentWrapper,
  CartTop,
  Container,
  Header,
  PriceContainer,
} from './Styles';
import BackArrow from '../Icons/BackArrow';

function Cart(props) {
  return (
    <Container column={'column'} height={'100%'}>
      <Header>
        <span onClick={props.handleClose}>
          <BackArrow />
        </span>
        <p>YOUR CART</p>
      </Header>
      <Container>
        <select name={props.currencyValue} id={props.currencyValue} onChange={props.changeCurrency}>
          {props.currency.currency.map((currency) => (
            <option value={currency} key={currency} selected={props.currencyValue === currency}>{currency}</option>
          ))}
        </select>
      </Container>
      <CartContentWrapper>
        <CartTop>
        <CartItem {...props} />
        </CartTop>
        <CartBottom>
          <PriceContainer>
            <Price {...props} />
          </PriceContainer>
          <Container column={'column'} margin={'15px 0'}>
            <CardButton width={'95%'} backgroundColor={'#fff'} color={'#4b5548'} marginBottom="10px">Make this a Subscription (save 20%)</CardButton>
            <CardButton width={'95%'}>Proceed to Checkout</CardButton>
          </Container>
        </CartBottom>
      </CartContentWrapper>
    </Container>
  );
}

export default Cart;
