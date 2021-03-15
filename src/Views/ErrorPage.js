import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: linear-gradient(
      174deg,
      #1b2d4c 0%,
      #152844 20%,
      #1a2c4b 46%,
      #162643 58%,
      #162643 82%,
      #1b2d4c 100%
    )
    0% 0% no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media (min-width: 768px) {
    justify-content: space-around;
    flex-direction: row;
  }
  img.spaceman {
    width: 300px;
  }
`;

const ErrorMessage = styled.div`
  padding-top: 2rem;
  & h1,
  h4,
  span,
  a {
    color: #fff;
  }
  h1 {
    font-size: 30px;
  }
  h4 {
    font-size: 16px;
  }
  span,
  a {
    font-size: 14px;
  }
  a {
    text-decoration: underline;
  }
  @media (min-width: 768px) {
    padding-top: 0;
    & a,
    span {
      font-size: 18px;
    }
    & h1 {
      font-size: 36px;
    }
    & h4 {
      font-size: 20px;
    }
  }
  @media (min-width: 996px) {
    & a,
    span {
      font-size: 20px;
    }
    & h1 {
      font-size: 36px;
    }
    & h4 {
      font-size: 20px;
    }
  }
`;

const ErrorPage = () => {
  return (
    <>
      <Container>
        <ErrorMessage>
          <h1>ERROR CODE 500</h1>
          <h4>
            THE PAGE YOU&apos;RE <br /> LOOKING FOR MUST BE <br /> HERE SOMEWHERE...
          </h4>
          <span className="link">Maybe you&apos;d like to go</span>
          <br />
          <a href="#/">back home</a>
        </ErrorMessage>
        <img
          className="spaceman"
          src="https://tenor.com/view/error-loading-cat-mad-angry-gif-7243458"
          alt="space man"
        />
      </Container>
    </>
  );
};
export default ErrorPage;
