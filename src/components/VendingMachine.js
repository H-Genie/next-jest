"use client"
import { useState } from "react"

const VendingMachine = () => {
  const products = {
    coke: 130,
    moxie: 150,
    fresca: 120,
    tab: 110
  }

  const [balance, setBalance] = useState(0)

  const insertCoin = amount => {
    setBalance(balance + amount)
  }

  const selectProduct = productName => {
    if (!products[productName]) {
      return "Product not available"
    }
    const price = products[productName]
    if (balance >= price) {
      setBalance(balance - price)
      return `Dispensing ${productName}`
    } else {
      return "Insufficient balance"
    }
  }

  return (
    <div>
      <h1>Vending Machine</h1>
      <p>Balance: {balance}</p>
      {/* Add UI for inserting coins and selecting products */}
    </div>
  )
}

export default VendingMachine
