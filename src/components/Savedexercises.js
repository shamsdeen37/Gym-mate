import React from 'react'
import Savedlist from './Savedlist'
import Error from './Error'

const Savedexercises = () => {
    const saveditems = JSON.parse(localStorage.getItem('Exercise_id'))
    
   
  return (
    <>
    { saveditems===null || saveditems?.length===0 ?
    (
      <Error message={"You didn't saved any exercises"}/>
    )

        :
        (
        
            saveditems.map((item,index)=>(
                <Savedlist key={index} exercise_id={item}/>
            ))
        
        )

    }
    </>
  )
}

export default Savedexercises