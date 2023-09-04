import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const EventDetails = () => {
    const { id } = useParams();
    console.log(id);

    const [identifier, setIdentifier] = useState()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/cities/${id}`)
            .then(response => setIdentifier(response.data.identifier))
            .catch(err => console.log(err))
    }, [id])

console.log(identifier); 
    
    return (
        <div>
            <h2 className='text-3xl text-center'>City: {id}</h2>
            <p></p>
        </div>
    )
}

export default EventDetails