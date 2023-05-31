import React, { useEffect, useRef, useState } from 'react'

import saveicon from '../utils/saveicon.png'
import savedicon from '../utils/savedicon.png'



const Save = ({exercise}) => {
    const [savebtn,setSavebtn] = useState(saveicon)
    const [save,setSave] = useState('Save')
    const saved = useRef()

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('Exercise_id'))
        if(data && data.includes(exercise?.id)){
            setSavebtn(savedicon)
            setSave('Saved')
        }
    },[exercise?.id])
    const savefunction = ()=>{
        const data = JSON.parse(localStorage.getItem('Exercise_id')) || [];
        if(data.includes(exercise.id)){
            setSavebtn(saveicon)
            setSave('Save')
            const updateddata =data.filter((id)=>id !== exercise?.id)
            localStorage.setItem('Exercise_id',JSON.stringify(updateddata))
        }
        else{
            setSavebtn(savedicon)
            setSave('Saved')
            const updateddata = [...data,exercise.id]
            localStorage.setItem('Exercise_id',JSON.stringify(updateddata))
        }
    }
  return (
    <div className='saveicons' ref={saved} onClick={savefunction}><img alt='save' className={save}  src={savebtn}/> {save} </div>
    )
}

export default Save