import React from 'react';
import { render, screen } from '@testing-library/react';

import JobLists from './index';

describe('Job list component', () => {
  test('When loader is true', () => {
    const componentProps = { data: undefined, isLoading: true, error: '' };

    // render component
    const { container } = render(<JobLists {...componentProps} />);

    const loader = container.querySelector('.makeStyles-loader-6');
    expect(loader).toBeInTheDocument();
  });

  test('When loader is false and error from server', () => {
    const componentProps = {
      data: undefined,
      isLoading: false,
      error: true,
    };

    // render component
    render(<JobLists {...componentProps} />);

    const errorFound = screen.getByText('Something went wrong');
    expect(errorFound).toBeInTheDocument();
  });

  test('When loader is false and no job is found', () => {
    const componentProps = { data: undefined, isLoading: false, error: '' };

    // render component
    render(<JobLists {...componentProps} />);

    const noJobFoundText = screen.getByText('No job found');
    expect(noJobFoundText).toBeInTheDocument();
  });

  test('When loader is false and job list receive from server', () => {
    const componentProps = {
      data: {
        data: {
          links: {
            prev: 'www.example.com?page=1',
            next: 'www.example.com?page=2'
          },
          included: [
            {
              attributes: {
                title: 'Medical Assistant',
                company: {
                  name: 'Stiedemann Group',
                  logo:
                    'https://dg102p7h2y9mx.cloudfront.net/7d0996019623f02ca5a3b5c479ef1805800ff685/agropa_list.png',
                },
                location: {
                  city: 'Port Beulahchester',
                },
                responsibilities:
                  'Repellendus necessitatibus doloremque et. Ipsum enim optio quia velit qui qui rerum exercitationem. Nihil voluptas eum aliquam ut voluptates in. Velit labore minus fugiat vero.',
                requirements:
                  'Ipsum enim optio quia velit qui qui rerum exercitationem. Nihil voluptas eum aliquam ut voluptates in. Velit labore minus fugiat vero.',
              },
            },
          ],
        },
      },
      isLoading: false,
      error: '',
    };

    // render component
    render(<JobLists {...componentProps} />);

    const title = screen.getByText('Medical Assistant');
    expect(title).toBeInTheDocument();

    const companyName = screen.getByText('Stiedemann Group');
    expect(companyName).toBeInTheDocument();

    const companyLogo = screen.getByAltText('Stiedemann Group');
    expect(companyLogo).toBeInTheDocument();

    const locationCity = screen.getByText('Port Beulahchester');
    expect(locationCity).toBeInTheDocument();

    const responsibilities = screen.getByText(/Responsibilities/i);
    expect(responsibilities).toHaveTextContent('Responsibilities:');

    const requirements = screen.getByText(/Requirements/i);
    expect(requirements).toHaveTextContent('Requirements:');

  });
});
