import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Results = () => {

    const {apiName,id}=useParams('')

    const [object, setObject]=useState({})

    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${apiName}/${id}`)
        .then((response)=>{
            // console.log(response.data)
            setObject(response.data)
        })
        .catch((err)=>{
            navigate('/*')
        })
    }, [apiName,id])

    let results=Object.keys(object).filter((sw,idx)=>(
    idx < 4
    ))

    return (
        <div>
            <h1>Results</h1>
            {
                results.map((sw,idx)=>{
                    return(
                        <div key={idx}>
                            <h3>{sw}: </h3>
                            <p>{object[sw]}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Results