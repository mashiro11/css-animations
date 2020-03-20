import React from 'react'

const Steps = () => {
  const [steps, setSteps] = React.useState(0)
  const [jump, setJump] = React.useState('')
  return(
    <div>
      <h4>Steps</h4>
      <div className='container'>
        <span>Steps:</span>
        <input type='text' placeholder='3' style={{width: 100}} value={steps} onChange={ e => setSteps(e.target.value)}/>
        <span>Jump:</span>
        <input type='text' placeholder='jump-start' style={{width: 100}} value={jump} onChange={ e => setJump(e.target.value)}/>
        <div style={{transitionTimingFunction: `steps(${steps}, ${jump})`}} className='transitionFunctions'>Yay</div>
      </div>
    </div>
  )
}

export default Steps
