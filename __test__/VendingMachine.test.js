import { render, screen } from "@testing-library/react"
import VendingMachine from "../src/components/VendingMachine"
import "@testing-library/jest-dom"

describe("VendingMachine", () => {
  it("should start with zero balance", () => {
    render(<VendingMachine />)
    expect(screen.getByText(/Balance:/)).toHaveTextContent("Balance: 0")
  })
})
