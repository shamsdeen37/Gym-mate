import React from 'react' 
import errorlogo from '../utils/errorlogo.png'
import errorduck from '../utils/errorduck.gif'

const Error = ({message}) => {
  return (
    <div className='error'>
        <div className='errormessage'>
            <div className='errorlogo'>
            <h1>Opps !</h1>
            <img width='60px' height='60px' alt='error' src={errorlogo}/>

            </div>
            <h2> {message}</h2>
        </div>
            <div className='errorduck'>
                <img alt='error' src={errorduck}/>
            </div>
    </div>
  )
}

export default Error