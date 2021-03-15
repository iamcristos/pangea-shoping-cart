import React from 'react';
import {render, cleanup} from '@testing-library/react';
import Modal from './Modal';

afterEach(cleanup)
it('should take a snapshot', () => {
    const {asFragment } = render(<Modal />);
    expect(asFragment(<Modal />)).toMatchSnapshot();
})
