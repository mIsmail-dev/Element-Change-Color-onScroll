import { useState, useEffect } from 'react'
import Card from '../../components/Card'
import './CardListing.scss'

const CardListing = () => {
  const [colors, setColors] = useState(['red', 'blue', 'green'])

  const shiftOne = (arr) => {
    let res = arr[0]
    if (arr.length > 0) arr.splice(0, 1)
    arr.push(res)
    return arr
  }

  const listenScrollEvent = (e) => {
    console.log()
    if (window.scrollY % 100 === 0 && window.scrollY !== 0) {
      let result = shiftOne(colors)
      setColors([...result])
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)

    return () => window.removeEventListener('scroll', listenScrollEvent)
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <div className='cards-container'>
        {colors.map((color) => (
          <Card key={color} color={color} />
        ))}
      </div>
    </>
  )
}

export default CardListing
