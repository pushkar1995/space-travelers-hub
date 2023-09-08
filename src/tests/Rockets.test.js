// import React from 'react';
// import { render } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
// import Rockets from '../pages/Rockets/Rockets';

// jest.mock('../redux/rocketSlice');

// const mockStore = configureStore([]);

// describe('Rockets Component', () => {
//   let store;

//   beforeEach(() => {
//     store = mockStore({
//       rockets: {
//         status: 'succeeded',
//         error: null,
//       },
//     });
//   });

//   it(' it renders loading state', () => {
//     store = mockStore({
//       rockets: {
//         status: 'loading',
//         error: null,
//       },
//     });

//     const { container } = render(
//       <Provider store={store}>
//         <Rockets />
//       </Provider>,
//     );

//     expect(container).toMatchSnapshot();
//   });

//   it('renders error state', () => {
//     store = mockStore({
//       rockets: {
//         status: 'failed',
//         error: 'Test Error',
//       },
//     });

//     const { container } = render(
//       <Provider store={store}>
//         <Rockets />
//       </Provider>,
//     );

//     expect(container).toMatchSnapshot();
//   });
// });

import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import Rockets from '../pages/Rockets/Rockets';

// Mocking react-redux's useSelector
jest.mock('react-redux');

// Mocking axios
jest.mock('axios', () => ({
  get: jest.fn(),
}));

test('Rockets component renders correctly', () => {
  // Mock the useSelector behavior
  useSelector.mockReturnValue({
    rockets: [
      {
        id: 1,
        name: 'Falcon 9',
        description: 'A powerful rocket developed by SpaceX.',
        flickr_images: ['image1.jpg', 'image2.jpg'],
        reserved: false,
      },
      // Add more mock rockets as needed
    ],
  });

  const { container } = render(<Rockets />);

  expect(container).toMatchSnapshot();
});
