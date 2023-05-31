import React, { useEffect, useState } from 'react'
import Save from './Save';

const Savedlist = ({ exercise_id }) => {
    const [exercise, setExercise] = useState()


    const url = `https://musclewiki.p.rapidapi.com/exercises/${exercise_id}`;
    const options = {
        method: 'GET',
        params: {
            category: 'pullups'
        },
        headers: {
            'X-RapidAPI-Key': '0021d7b40emsh4f538c8eb410097p1ff11ejsn91a8d2524640',
            'X-RapidAPI-Host': 'musclewiki.p.rapidapi.com'
        }
    };

    useEffect(() => {
        func()

    }, [exercise_id])
    const func = async () => {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setExercise(result)
        } catch (error) {
            console.error(error);
        }
    }
    console.log(exercise?.exercise_name)


    return (
        <div  className='exercise' >

        <div className='exerciseelement'>
            <div style={{ width: '90vw', height: '90vh' }}>
                <h1> {exercise?.exercise_name}</h1><br />
                <div>

                    {<Save exercise={exercise} />}
                </div>
                <div className='targets'>
                    <h3>Targets </h3>
                    <h4> Primary:{exercise?.target?.Primary?.map((ec, index) => (<p key={index}>{index + 1}-{ec}</p>))}</h4>
                    {exercise?.target?.Secondary && <h4> Secondary :{exercise?.target?.Secondary?.map((ec, index) => (<p key={index}>{index + 1}-{ec}</p>))}</h4>}
                    {exercise?.target?.Tertiary && <h4> Tertiary :{exercise?.target?.Tertiary?.map((ec, index) => (<p key={index}>{index + 1}-{ec}</p>))}</h4>}
                </div>

                <div className='videoselement'>
                    {exercise?.videoURL.map((video, index) => (
                        <video className='videos' key={index} width='300vw' height='auto' src={video} autoPlay muted loop />
                    ))}

                </div>


                <div className='stepelement' >
                    <h2>HOW TO DO ?</h2>
                    {exercise?.steps.map((step, index) => (
                        <div className='steps' key={index} ><h3>Step {index + 1}  </h3> : <h4>{step}</h4>  </div>
                    ))}
                </div>
                {/* <div style={{background:'yellow',position:'relative',left:'65%',bottom:'400px'}}>{excercise.details}</div> */}


            </div>
            <div style={{ width: '100%', height: '1px', background: 'black', position: 'relative' }}></div>
        </div>
        </div>
    )
}

export default Savedlist