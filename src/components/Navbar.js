import React from 'react' 
import { Link } from 'react-router-dom'
import icon from '../utils/Gymicon.png'
import saveicon from '../utils/savedicon.png'

const Navbar = () => {

  return (
    <div className='navbar' >
        <div className='navelement'>
        <Link to={'/'} ><img width='70px' height='auto' alt='icon' src={icon}/></Link>
        <h1> Gym mate</h1>
        </div>
        <div>
       <Link className='savedexercise' to={'/saved_exercise'} ><img width='25px' height='20px' alt='savedicon' src={saveicon}/>Saved Exercise</Link>
        </div>

   </div>
  )
}

export default Navbar