import React from 'react';
import { render, screen } from '@testing-library/react';
import * as useGetJoblists from '../../service/';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from './index';

describe('Home component', () => {
  test('When loader is true', () => {

    const componentProps = [function(){}, { data: undefined, isLoading: true, error: '' }];

    const spy = jest.spyOn(useGetJoblists, 'default');

    spy.mockReturnValue(componentProps);

    // render component
    const { container } = render(<Home />);

    const formTag = container.querySelector('form');
    expect(formTag).toBeInTheDocument();

    const inputFiled = screen.getByPlaceholderText('Search job');
    expect(inputFiled).toBeInTheDocument();

    const searchButton = screen.getByText('search');
    expect(searchButton).toBeInTheDocument();

  });

});
