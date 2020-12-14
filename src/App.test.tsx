import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

describe('Home component', () => {
  test('renders learn react link', () => {

    const { container } = render(
      <Router>
        <App />
      </Router>
    );

    const firstElement = container.firstChild;
    expect(firstElement).toHaveClass('makeStyles-wrapper-1');
    
    // check header
    const logoHeader = container.querySelector('.makeStyles-logo-2');
    expect(logoHeader).toBeInTheDocument();

  });
});
