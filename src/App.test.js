import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
// import axiosMock from 'axios'
import App from './components/App';

// jest.mock('axios')

// test('test app', async () => {
  
//   const { getByTestId } = render(<App />);

//   // axiosMock.get.mockResolvedValueOnce({
//   //   data: { greeting: 'totalhits' },
//   // })

//   // fireEvent.click(getByText('Load Images'))

//   await waitForElement(() => getByTestId('json'))

//   // expect(axiosMock.get).toHaveBeenCalledTimes(1)
//   // expect(axiosMock.get).toHaveBeenCalledWith(url)
//   expect(getByTestId('json')).toHaveTextContent(/"totalHits":500/)
//   // expect(getByRole('button')).toHaveAttribute('disabled')
// });

test('test homepage', async () => {

  // the user opens the website  
  const { getByText, getAllByTestId, getByRole, getByTestId } = render(<App />);

  // the user sees the navbar, navigator, and that the images are loading
  expect(getByText('loading...'))

  // the user waits untill all images are loaded
  await waitForElement(() => getByTestId('image-list'))

  // the user doesn't like any of these images and goes to the second and directly to the third page
  fireEvent.click(getAllByTestId('next')[0])
  fireEvent.click(getAllByTestId('next')[0])

  // the user again waits for the images to load
  await waitForElement(() => getByTestId('image-list'))

  // the user want to go back as he might have seen a good image on page 2
  fireEvent.click(getAllByTestId('prev')[0])

  // this is instant as the image data was cached
  // the user sees the image list again
  expect(getByTestId('image-list'))

  // the user likes the 7th image in the list and clicks it
  fireEvent.click(getByTestId('image-list').childNodes[6])

  // the user doesn't have to wait as the image data is stored in the redux store
  // the user sees the title, author, the image and a list of other properties 
  expect(getByTestId('tags'))
  expect(getByTestId('user'))
  expect(getByRole('list'))

  // the user isn't happy enough with the picture and returns to the homepage
  fireEvent.click(getByTestId('back'))

  // also this is cached, so the list is shown straight away
  // expect(getByTestId('image-list'))

});
