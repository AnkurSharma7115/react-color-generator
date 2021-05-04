import React, { useState } from 'react'
import SingleColor from './SingleColor'

 // uses library value.js for color's values (tint / shade / all)

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#f15025').all(10)) //10 is the color difference weight

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10) // values.js method ( all() )
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#f15025'
            className={`${error ? 'error' : null}`}
          />
          <button className='btn' type='submit'>
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return (
            <SingleColor key={index}  {...color}  index={index}  hexColor={color.hex}  />
          )
        })}
      </section>
    </>
  )
}

export default App
