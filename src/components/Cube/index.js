import React from 'react'

const Cube = () => {
  //https://stackoverflow.com/questions/27545406/css3-transform-origin-issue-in-3d-cube
  const cubeFace = (color) => {
    return{
      ':hover': {transform: 'rotateX(360deg)'},
      transformOrigin: 'center center 50px',
      transition: 'transform 4s',
      position: 'absolute',
      backgroundColor: color,
      width: 100, height: 100,
    }
  }
  return (
    <div style={{position: 'relative', perspective: 1000, '-webkit-perspective': 1000}}>
      <div style={cubeFace('blue')}></div>
      <div style={cubeFace('red')}></div>
      <div style={cubeFace('green')}></div>
      <div style={cubeFace('yellow')}></div>
    </div>
  )
}

export default Cube
