/**
 * @jest-environment jsdom
 */

import { screen } from "@testing-library/dom"
import Actions from "../views/Actions.js"
import '@testing-library/jest-dom/extend-expect'


describe('Given I am connected as an Employee', () => {
  describe('When I am on Bills page and there are bills', () => {
    test(('Then, it should render icon eye'), () => {
      const html = Actions('/', 0)
      document.body.innerHTML = html
      expect(screen.getByTestId('icon-eye-0')).toBeTruthy()
    })
  })
  describe('When I am on Bills page and there are bills with url for file', () => {
    test(('Then, it should save given url in data-bill-url custom attribute'), () => {
      const url = '/fake_url'
      const html = Actions(url, 0)
      document.body.innerHTML = html
      expect(screen.getByTestId('icon-eye-0')).toHaveAttribute('data-bill-url', url)
    })
  })
})
