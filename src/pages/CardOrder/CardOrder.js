import React from 'react'
import { useLocation } from 'react-router-dom'
import styles from './CardOrder.module.scss'

const CardOrder = () => {
  const { state } = useLocation()
  const { colors } = state
  return (
    <ul>
      {colors.map((color) => (
        <li className={styles.liContainer} key={color}>
          {color}
        </li>
      ))}
    </ul>
  )
}

export default CardOrder
