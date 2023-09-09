import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import Missions from '../pages/Missions/Missions';

jest.mock('react-redux');

jest.mock('axios', () => ({
  get: jest.fn(),
}));

test('Rockets component renders correctly', () => {
  useSelector.mockReturnValue({
    missions: [
      {
        id: 1,
        mission_name: 'Thaicom',
        description: 'A powerful rocket developed by SpaceX.',
        reserved: false,
      },
    ],
  });

  const { container } = render(<Missions />);

  expect(container).toMatchSnapshot();
});