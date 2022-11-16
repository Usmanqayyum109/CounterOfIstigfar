import React, { useState } from 'react'

const Istigfaar = () => {
    const [count,setCount] = useState(0)
  return (
    <div>
     
      <button className='color' onClick={() => setCount(count + 1)}>ADDITION</button>
      <button className='color1' onClick={() => setCount(count - 1)}>SUBTRACTION</button>
      <button className='color0' onClick={() => setCount(count * 0)}>RESET</button>
      <button className='color11' onClick={() => setCount(Math.floor(Math.random() * 10000))}>RONDAM NUMBER</button>
      
      <div className='center1'>
      {count % 2 === 0? "Even" : "Odd"}
      </div>
      <div className='center'>
      {count }
      </div>
    </div>
  )
}

export default Istigfaar
