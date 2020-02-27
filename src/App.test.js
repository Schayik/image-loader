import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { createMemoryHistory } from 'history'

import App from './components/App';

test('test homepage', async () => {

  // the user opens the website  
  const { getByText, getAllByTestId, getByRole, getByTestId } = render(<App />);

  // the user sees the navbar, navigator, and that the images are loading
  expect(getByText('loading...'))

  // the user waits untill all images are loaded
  await waitForElement(() => getByTestId('image-list'))

  // the user doesn't like any of these images and goes to the second page
  fireEvent.click(getAllByTestId('next')[0])
  await waitForElement(() => getByTestId('image-list'))

  // the user goes to the third page
  fireEvent.click(getAllByTestId('next')[0])
  await waitForElement(() => getByTestId('image-list'))

  // the user want to go back as he saw the best image on page 2
  fireEvent.click(getAllByTestId('prev')[0])

  // the user sees the image list again (this is instant as the image data was cached)
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
  // TODO: figure out why this doesn't work: expect(getByTestId('image-list'))
  expect(getByTestId('image-list'))
  // await waitForElement(() => getByTestId('image-list'))

});

test('test image page', async () => {
  const history = createMemoryHistory()

  // the user uses a direct link to an image
  history.push('/4843834')

  // the user opens the website  
  const { getByText, getByTestId, getByRole } = render(<App history={history}/>);

  // the user sees the navbar, and that the image is loading
  expect(getByText('loading...'))

  // the user waits until the image data is loaded
  await waitForElement(() => getByTestId('tags'))

  // the user sees the title, author, the image and a list of other properties 
  expect(getByTestId('tags'))
  expect(getByTestId('user'))
  expect(getByRole('list'))

});
