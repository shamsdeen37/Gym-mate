import React, { useEffect, useRef, useState } from 'react';

import Exercises from './Exercises';
import Navbar from './Navbar';

const Home = () => {
  const [selected,setSelected] = useState()
  const categories = useRef()
  const difficulties = useRef()
  const muscles = useRef()

  const exerciseelement = useRef(null)

  const [selectedcategory,setSelectedcategory] = useState('Barbell')
  const [selecteddifficulty,setSelecteddifficulty] = useState('Beginner')
  const [selectedmuscles,setSelectedmuscles] = useState('Biceps')
  const [show,setShow] = useState(false)


  var select =()=>{
    const category = categories.current.value
    setSelectedcategory(category)
    const dificulty = difficulties.current.value
   setSelecteddifficulty(dificulty)
   const muscle = muscles.current.value
   setSelectedmuscles(muscle)
   setShow(true)
   window.scrollTo({
     top:exerciseelement.current.offsetTop,
     behavior:"smooth",
    })
 }    
  
  const url= 'https://musclewiki.p.rapidapi.com/exercises/attributes';
  const options = {
    method: 'GET',
    params: {
      category: 'pullups'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'musclewiki.p.rapidapi.com'
    }
  };
  
  useEffect(()=>{
    func()
    
  },[])
  const  func = async() =>{
    try {
      const response = await fetch(url, options);
      const result = await  response.json();
      setSelected(result)
    } catch (error) {
      console.error(error);
    }
  }

  

  return (
    <>

    <div className='home' >
      <Navbar/>
      
    <div className='homeelement' >
    
      <h2 className='selectcategory'>Select Category</h2>
      <select ref={categories} name='select' className='categories' >
        {
          selected?.categories?.map((category,index)=>(
            <option key={index}  value={category} >{category}</option>
          ))
        }
       
      </select>

      <h2 className='selectdifficulty'>Select Difficulty</h2>
      <select name='select' ref={difficulties} className='difficulties'      >
        {
          selected?.difficulties?.map((category,index)=>(
            <option key={index}  value={category}>{category}</option>
          ))
        }


      </select>
             <h2 className='selectmuscle'>Select Muscle</h2>
      <select name='select' ref={muscles} className='muscles'      >
        {
          selected?.muscles?.map((category,index)=>(
            <option key={index} value={category}>{category}</option>
          ))
        }
       
      </select>
      <button onClick={select} className='submitbtn'>submit</button>
</div>
<div className='motivation'>STOP WISHING START DOING</div>
     
 </div>
{ <Exercises show={show}  ref={exerciseelement} selectedcategory={selectedcategory} selecteddifficulty={selecteddifficulty} selectedmuscles={selectedmuscles}/>}   
 </>
  );
};

export default Home;
