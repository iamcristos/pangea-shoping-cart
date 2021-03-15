import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import CartItem from './CartItem';

afterEach(cleanup);

describe('render CartItem', () => {
    let carts = [{title: '', image_url: '', count: 1, id: 1}];
    const addCart = () => carts[0].count += 1
    const removeCart = () => carts[0].count -= 1
    const deleteCart = () => carts = null;

    it('should increase item', () => {
        const { getByTestId } = render(<CartItem carts={carts} addCart={addCart} removeCart={removeCart} deleteCart={deleteCart}/>);

        fireEvent.click(getByTestId('addCount'));

        expect(carts[0].count).toBe(2);
    });

    it('should decrease item', () => {
        const { getByTestId } = render(<CartItem carts={carts} addCart={addCart} removeCart={removeCart} deleteCart={deleteCart}/>);

        fireEvent.click(getByTestId('deleteCount'));

        expect(carts[0].count).toBe(1);
    });

});

