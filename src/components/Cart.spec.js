import React from 'react';
import { render, cleanup, screen} from '@testing-library/react';

import Cart from './Cart';

describe('Cart render', () => {
    afterEach(cleanup);

    let carts = [{title: '', image_url: '', count: 1, id: 1}];
    const addCart = () => carts[0].count += 1;
    const removeCart = () => carts[0].count -= 1;
    const deleteCart = () => carts = null;
    const currency = ['USD', 'ALL'];
    const currencyValue = 'USD';
    const changeCurrency = () => 'ALL';
    

    it('should render Cart component', () => {
        const { container } = render(<Cart carts={carts} addCart={addCart} 
            removeCart={removeCart} deleteCart={deleteCart} currency={currency}
             currencyValue={currencyValue}
                 changeCurrency={changeCurrency}
             />);

        expect(container).toBeInTheDocument();
    })

    it('should render this text', () => {
        const { getByTestId } = render(<Cart carts={carts} addCart={addCart} 
            removeCart={removeCart} deleteCart={deleteCart} currency={currency}
             currencyValue={currencyValue}
                 changeCurrency={changeCurrency}
             />);
        const paragraph = screen.getByText(/YOUR CART/i)
        const select =  getByTestId('select');

        expect(paragraph).toBeInTheDocument();
        expect(select.length).toBe(2);
    })

     it('should not render CartItem component', () => {
        const {getByTestId} = render(<Cart carts={carts} addCart={addCart} 
            removeCart={removeCart} deleteCart={deleteCart} currency={currency}
             currencyValue={currencyValue}
                 changeCurrency={changeCurrency}
                 loading={true}
             />);
        const spinner = getByTestId('spinner')
        expect(spinner).toBeInTheDocument();
    })
})


