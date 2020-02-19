import React from "react"
import { render, cleanup } from "@testing-library/react"
import "jest-dom/extend-expect"
import IndexPage from "../../pages"

afterEach(cleanup)

it("matches snapshot", () => {
  const { asFragment } = render(<IndexPage />)
  expect(asFragment()).toMatchSnapshot()
})