import React from 'react';
import { render, cleanup, screen} from '@testing-library/react';

import Product from './Products';

describe('Cart render', () => {
    afterEach(cleanup);

    const carts = [{title: 'Title', image_url: '', price: 1, id: 1}];
    const handleOpen = () => {};
    const currencyValue = 'USD';
    

    it('should render Product component', () => {
        const { container } = render(<Product data={carts} 
             currencyValue={currencyValue}
                 handleOpen={handleOpen}
             />);
        expect(container).toBeInTheDocument();
    })
})
