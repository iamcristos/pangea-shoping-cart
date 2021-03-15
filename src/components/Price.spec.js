import React from 'react';
import {render, cleanup, screen } from '@testing-library/react';
import Price from './Price';

afterEach(cleanup);

it('should render 2 chidren', () => {
    const carts = [{total: 1}]
    const {  container } = render(<Price carts={carts} />)

    const paragraph = screen.getByText(/Subtotal/i)
    const span  = screen.getByText(/1/i)
    expect(container).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(span).toBeInTheDocument();
})