import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom"

const EventDetails = () => {
    const { id } = useParams(); // ID de mi evento
    // Tener una variable de estado para almacenar la info de mi evento

    useEffect(() => {
        console.log("UseEffect executed");
        axios.get('http://localhost:8000/api/cities')
            .then((response) => {
                response = id
                console.log(response);
          })
          .catch(err => console.log(err))
    }, [])
  

    

    // Utilizar esa variable de estado para renderizar la info
    return (
        <div>
            <h2 className='text-3xl text-center'>Detalle del evento: {id}</h2>
        </div>
    )
}

export default EventDetails