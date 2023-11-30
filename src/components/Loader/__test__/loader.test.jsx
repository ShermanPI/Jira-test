import { it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import Loader from '../Loader'

it('Should render loader screen', () => {
  render(<Loader />)
  const loaderContainer = screen.queryByTestId('loader-container')
  expect(loaderContainer).toBeVisible()
})

it('Should desapear after six seconds', async () => {
  render(<Loader />)
  const loaderContainer = screen.queryByTestId('loader-container')

  await new Promise((resolve) => setTimeout(resolve, 6000))

  expect(loaderContainer).not.toBeInTheDocument()
})
