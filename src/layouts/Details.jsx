import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom"

const EventDetails = () => {
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        console.log("UseEffect executed");
        axios.get('http://localhost:8000/api/cities')
            .then((response) => {
                response = id
                console.log(response);
          })
          .catch(err => console.log(err))
    }, [])
  
    return (
        <div>
            <h2 className='text-3xl text-center'>Detalle del evento: {id}</h2>
        </div>
    )
}

export default EventDetails