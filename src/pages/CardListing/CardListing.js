import { useState, useEffect } from 'react'
import Card from '../../components/Card'
import './CardListing.scss'

const CardListing = () => {
  const [colors, setColors] = useState(['red', 'blue', 'green'])

  // console.log('rendered: ', colors)
  const shiftOne = (arr) => {
    // console.log('arr: ', arr)
    let res = arr[0] // Store the first element & then remove it from the array. After removing it, push it to the end of the array
    if (arr.length > 0) arr.splice(0, 1)
    arr.push(res)
    // console.log('res: ', arr)
    return arr
  }

  const listenScrollEvent = (e) => {
    console.log('Scrolled: ', window.scrollY)
    console.log()
    if (window.scrollY % 100 === 0 && window.scrollY !== 0) {
      // console.log('Called', window.scrollY)
      // console.log('colors before: ', colors)
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
