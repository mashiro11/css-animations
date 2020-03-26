import React from 'react'

const Dot = ({x, y}) => {
  const width = 6, height = 6
  return(
    <div style={{
      position: 'absolute',
      top: y - height/2, left: x - width/2,
      borderRadius: '50%',
      backgroundColor: 'red',
      width, height
    }}>
    </div>
  )
}

export default Dot
