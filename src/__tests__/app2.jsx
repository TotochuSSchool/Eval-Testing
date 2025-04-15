import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../app'

test('Cas non passant - étapes 1 - 34', async () => {
  // 1
  render(<App />)

  // 2
  expect(screen.getByText(/Welcome home/i)).toBeInTheDocument()

  // 3
  expect(
    screen.getByRole('link', {name: /Fill out the form/i}),
  ).toBeInTheDocument()

  // 4
  userEvent.click(screen.getByRole('link', {name: /Fill out the form/i}))

  // 5
  expect(await screen.findByText(/Page 1/i)).toBeInTheDocument()

  // 6
  expect(screen.getByRole('heading', {name: /Page 1/i})).toBeInTheDocument()

  // 7
  expect(screen.getByRole('link', {name: /Go home/i})).toBeInTheDocument()

  // 8
  expect(screen.getByLabelText(/Favorite food/i)).toBeInTheDocument()

  // 9
  userEvent.clear(screen.getByLabelText(/Favorite food/i))
  expect(screen.getByLabelText(/Favorite food/i).value).toBe('')

  // 10
  expect(screen.getByRole('link', {name: /Next/i})).toBeInTheDocument()

  // 11
  userEvent.click(screen.getByRole('link', {name: /Next/i}))

  // 12
  expect(await screen.findByText(/Page 2/i)).toBeInTheDocument()

  // 13
  expect(screen.getByRole('heading', {name: /Page 2/i})).toBeInTheDocument()

  // 14
  expect(screen.getByRole('link', {name: /Go back/i})).toBeInTheDocument()

  // 15
  expect(screen.getByLabelText(/Favorite drink/i)).toBeInTheDocument()

  // 16
  userEvent.type(screen.getByLabelText(/Favorite drink/i), 'Bière')
  expect(screen.getByLabelText(/Favorite drink/i).value).toBe('Bière')

  // 17
  expect(screen.getByRole('link', {name: /Review/i})).toBeInTheDocument()

  // 18
  userEvent.click(screen.getByRole('link', {name: /Review/i}))

  // 19
  expect(
    await screen.findByRole('heading', {name: /Confirm/i}),
  ).toBeInTheDocument()

  // 20
  expect(screen.getByRole('heading', {name: /Confirm/i})).toBeInTheDocument()

  // 21
  expect(screen.getByText(/Please confirm your choices/i)).toBeInTheDocument()

  // 22
  const foodSpan = screen.getByText(
    (content, element) =>
      element.tagName.toLowerCase() === 'span' &&
      element.getAttribute('aria-labelledby') === 'food-label',
  )
  expect(foodSpan.textContent).toBe('')

  // 23
  const drinkSpan = screen.getByText(
    (content, element) =>
      element.tagName.toLowerCase() === 'span' &&
      element.getAttribute('aria-labelledby') === 'drink-label',
  )
  expect(drinkSpan.textContent).toBe('Bière')

  // 24
  expect(screen.getByRole('link', {name: /Go back/i})).toBeInTheDocument()

  // 25
  expect(screen.getByRole('button', {name: /Confirm/i})).toBeInTheDocument()

  // 26
  userEvent.click(screen.getByRole('button', {name: /Confirm/i}))

  // 27
  expect(
    await screen.findByText(/Oh no. There was an error\./i),
  ).toBeInTheDocument()

  // 28
  expect(screen.getByText(/Oh no. There was an error\./i)).toBeInTheDocument()

  // 29
  expect(
    screen.getByText(/les champs food et drink sont obligatoires/i),
  ).toBeInTheDocument()

  // 30
  expect(screen.getByRole('link', {name: /Go home/i})).toBeInTheDocument()

  // 31
  expect(screen.getByRole('link', {name: /Try again/i})).toBeInTheDocument()

  // 32
  userEvent.click(screen.getByRole('link', {name: /Try again/i}))

  // 33
  expect(await screen.findByText(/Page 1/i)).toBeInTheDocument()

  // 34
  expect(screen.getByRole('heading', {name: /Page 1/i})).toBeInTheDocument()
})
