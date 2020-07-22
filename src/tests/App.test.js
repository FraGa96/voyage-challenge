import React from 'react'
import { render, fireEvent, act, waitForElement, screen } from '@testing-library/react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import App from '../App'

const server = setupServer(
  rest.post('https://voyagechallenge-48926.firebaseio.com/formData.json', (req, res, ctx) => {
    return res(ctx.json({name:'-MCmrtyVmpevM3Nrt_VD'}))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('new color is added', () => {
  const { getByTestId, getByText } = render(<App />)
  const selectField = getByTestId('color')
  const initialLength = selectField.children.length
  expect(initialLength).toBe(4)

  const selectEvent = { target: { value: 'Other'}}
  fireEvent.change(selectField,selectEvent)
  expect(selectField.value).toBe('Other')

  const inputField = getByTestId('newColor')
  const inputColorEvent = { target: { value: 'Pink'}}
  fireEvent.change(inputField, inputColorEvent)
  expect(inputField.value).toBe('Pink')

  const addButton = getByText('Add')
  fireEvent.click(addButton)
  const finalLength = selectField.children.length
  expect(finalLength).toBe(5)
})

test('form is submited', async () => {
  server.use(
    rest.post('https://voyagechallenge-48926.firebaseio.com/formData.json', (req, res, ctx) => {
      return res(ctx.json({name:'-MCmrtyVmpevM3Nrt_VD'}))
    })
  )
  let renderedComp = null
  act(()=>{
    renderedComp = render(<App />)
  })
  const {getByText} = renderedComp
  const submitButton = getByText('Submit')
  act(()=>{
  fireEvent.click(submitButton)
  })
  await waitForElement(() => screen.getByText('Success!'))
  expect(screen.getByText('Success!')).toBeTruthy()
})