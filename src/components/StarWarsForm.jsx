import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';


const StarWarsForm = (props) => {
    const [apiName, setApiName]=useState('people')
    const [id, setId]=useState('')

    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate(`/results/${apiName}/${id}`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Search for: </label>
                <select onChange={(e)=>setApiName(e.target.value)}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="spaceships">Spaceships</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="films">Films</option>
                    <option value="species">Species</option>
                </select>
                <br />
                <label>ID: </label>
                <input type="number" onChange={(e)=>setId(e.target.value)}></input>
                <br />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default StarWarsForm