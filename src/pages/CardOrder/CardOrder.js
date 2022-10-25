import React from 'react'
import { useLocation } from 'react-router-dom'
import './cardOrder.scss'

const CardOrder = () => {
  const { state } = useLocation()
  const { colors } = state
  return (
    <ul>
      {colors.map((color) => (
        <li key={color}>{color}</li>
      ))}
    </ul>
  )
}

export default CardOrder
