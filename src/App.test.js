import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
// import axiosMock from 'axios'
import App from './App';

// jest.mock('axios')

test('test app', async () => {
  
  const { getByTestId } = render(<App />);

  // axiosMock.get.mockResolvedValueOnce({
  //   data: { greeting: 'totalhits' },
  // })

  // fireEvent.click(getByText('Load Images'))

  await waitForElement(() => getByTestId('json'))

  // expect(axiosMock.get).toHaveBeenCalledTimes(1)
  // expect(axiosMock.get).toHaveBeenCalledWith(url)
  expect(getByTestId('json')).toHaveTextContent(/"totalHits":500/)
  // expect(getByRole('button')).toHaveAttribute('disabled')
});
