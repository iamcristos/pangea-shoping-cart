import React from 'react';
import { Card, CardButton, CardContainer } from './Styles';

export default function Products({ data, handleOpen, currencyValue }) {
  return (
    <CardContainer>
      {data?.products?.map(({ title, image_url, price, id }) => (
        <Card key={id}>
          <img src={image_url} alt={title} />
          <h2>{title}</h2>
          <p>From: {Number(price.toFixed(2))} {currencyValue}</p>
          <CardButton width="45%" onClick={() => handleOpen({ title, image_url, price, id })}>
            {' '}
            Add to Cart
          </CardButton>
        </Card>
      ))}
    </CardContainer>
  );
}
