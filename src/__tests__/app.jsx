import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../app'

test('Cas passant - étapes 1 - 32', async () => {
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
  userEvent.type(screen.getByLabelText(/Favorite food/i), 'Les pâtes')
  expect(screen.getByLabelText(/Favorite food/i).value).toBe('Les pâtes')

  // 10
  const nextLink = screen.getByRole('link', {name: /Next/i})
  expect(nextLink).toBeInTheDocument()

  // 11
  userEvent.click(nextLink)

  // 12
  expect(await screen.findByText(/Page 2/i)).toBeInTheDocument()

  // 13
  expect(screen.getByRole('heading', {name: /Page 2/i})).toBeInTheDocument()

  // 14
  expect(screen.getByRole('link', {name: /Go back/i})).toBeInTheDocument()

  // 15
  const drinkInput = screen.getByLabelText(/Favorite drink/i)
  expect(drinkInput).toBeInTheDocument()

  // 16
  userEvent.type(drinkInput, 'Bière')
  expect(drinkInput.value).toBe('Bière')

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
  expect(screen.getByText(/Les pâtes/i)).toBeInTheDocument()

  // 23
  expect(screen.getByText(/Bière/i)).toBeInTheDocument()

  // 24
  expect(screen.getByRole('link', {name: /Go back/i})).toBeInTheDocument()

  // 25
  expect(screen.getByRole('button', {name: /Confirm/i})).toBeInTheDocument()

  // 26
  userEvent.click(screen.getByRole('button', {name: /Confirm/i}))

  // 27
  expect(
    await screen.findByRole('heading', {name: /Congrats\. You did it\./i}),
  ).toBeInTheDocument()

  // 28
  expect(screen.getByText(/Congrats\. You did it\./i)).toBeInTheDocument()

  // 29
  expect(screen.getByRole('link', {name: /Go home/i})).toBeInTheDocument()

  // 30
  userEvent.click(screen.getByRole('link', {name: /Go home/i}))

  // 31
  expect(await screen.findByText(/Welcome home/i)).toBeInTheDocument()

  // 32
  expect(screen.getByText(/Welcome home/i)).toBeInTheDocument()
})
