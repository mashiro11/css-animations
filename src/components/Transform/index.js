import React from 'react'
import Dot from './dot.js'

const Transform = () => {
  const [x, setX] = React.useState('0')
  const [y, setY] = React.useState('0')

  const origin = (x, y) => {
    return{
      transformOrigin: `${x}px ${y}px`
    }
  }

  React.useEffect(()=>{}, [x, y])

  return(
    <div style={{position: 'relative'}}>
      <div>Transform-origin:
        x: <input type='text' value={x} onChange={ e =>setX(e.target.value)}/>
      y: <input type='text' value={y} onChange={ e => setY(e.target.value)}/>
      </div>
      <div id='scale' className='transform' style={origin(parseInt(x), parseInt(y))}>
        Scale
        <Dot x={parseInt(x)} y={parseInt(y)}/>
      </div>
      <div id='translate' className='transform' style={origin(parseInt(x), parseInt(y))}>
        Translate
        <Dot x={parseInt(x)} y={parseInt(y)}/>
      </div>
      <div id='rotate' className='transform' style={origin(parseInt(x), parseInt(y))}>
        Rotate
        <Dot x={parseInt(x)} y={parseInt(y)}/>
      </div>
      <div id='skew' className='transform' style={origin(parseInt(x), parseInt(y))}>
        Skew
        <Dot x={parseInt(x)} y={parseInt(y)}/>
      </div>
    </div>
  )
}

export default Transform
