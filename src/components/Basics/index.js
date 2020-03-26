import React from 'react'

const Basics = () => {
  return(
    <div>
      <h4>Basics</h4>
      <div className='container'>
        <div id='ease' className='transitionFunctions'>ease</div>
        <div id='easein' className='transitionFunctions'>ease-in</div>
        <div id='easeout' className='transitionFunctions'>ease-out</div>
        <div id='easeinout' className='transitionFunctions'>ease-in-out</div>
        <div id='linear' className='transitionFunctions'>linear</div>
        <div id='stepstart' className='transitionFunctions'>step-start</div>
        <div id='stepend' className='transitionFunctions'>step-end</div>
      </div>
    </div>
  )
}

export default Basics
