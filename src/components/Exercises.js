import React, { forwardRef, useEffect, useState } from 'react'

import Save from './Save'
import Error from './Error'



const  Exercises = forwardRef((props,ref) => {

  const [videourl,setVideourl] = useState([])
    // const [message,setMessage] = useState('')

    const message =`The combination for ${props.selectedcategory} , ${props.selecteddifficulty} and ${props.selectedmuscles} was irrelavent ... \n\n Please try other combinations ...`


 


  const url= `https://musclewiki.p.rapidapi.com/exercises?category=${props.selectedcategory}&difficulty=${props.selecteddifficulty}&muscle=${props.selectedmuscles}`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'musclewiki.p.rapidapi.com'
    }
  };
  
  useEffect(()=>{
      func()
     },[ url ])

  const  func = async() =>{
    try {
      const response = await fetch(url, options);
      const result = await  response.json();

      for(var i=0;i<result.length;i++){
        for(var j=i+1;j<result.length;j++){
          if(result[i]?.exercise_name===result[j]?.exercise_name){
           delete result[j]
          }
        }
      }

      setVideourl(result)
    } catch (error) {
      console.error(error);
    }
  }
  

 console.log(videourl)




  return (
    
   <div ref={ref}>
   {props.show && videourl?.length===0 ? <Error message={message}/> : props.show &&
   <div  className='exercise' >
   
   {
 videourl?.map((excercise,index)=>(
   <div key={index} className='exerciseelement'>
     <div style={{width:'90vw',height:'90vh'}}>
     <h1> {excercise.exercise_name}</h1><br/>
     <div>

{      <Save  exercise={excercise}/>}
     </div>
     <div className='targets'>
     <h3>Targets </h3>
     <h4> Primary:{excercise?.target?.Primary?.map((ec,index)=>(<p key={index}>{index+1}-{ec}</p>))}</h4>
     { excercise?.target?.Secondary && <h4> Secondary :{excercise?.target?.Secondary?.map((ec,index)=>(<p key={index}>{index+1}-{ec}</p>))}</h4>      }  
     { excercise?.target?.Tertiary && <h4> Tertiary :{excercise?.target?.Tertiary?.map((ec,index)=>(<p key={index}>{index+1}-{ec}</p>))}</h4>      }  
</div>

     <div className='videoselement'>
       {excercise.videoURL.map((video,index)=>(
         <video className='videos' key={index} width='300vw' height='auto' src={video} autoPlay muted loop/>
       ))}

           </div>


           <div className='stepelement' >
            <h2>HOW TO DO ?</h2>
           {excercise.steps.map((step,index)=>(
           <div className='steps' key={index} ><h3>Step {index+1}  </h3> : <h4>{step}</h4>  </div>
           ))}
           </div>
           {/* <div style={{background:'yellow',position:'relative',left:'65%',bottom:'400px'}}>{excercise.details}</div> */}


           </div>
<div style={{width:'100%',height:'1px',background:'black',position:'relative'}}></div>
     </div>

 ))

   }


  </div>
  }
   </div>
    
    



  )
}
)
export default Exercises










