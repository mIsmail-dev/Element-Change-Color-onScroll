import React from 'react'

const CardOrder = ({ colors }) => {
  return (
    <div>
      {colors.map((color) => (
        <h1 key={color}>{color}</h1>
      ))}
    </div>
  )
}

export default CardOrder
