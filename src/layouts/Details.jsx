import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import dollar from "../assets/dollar.png"

const EventDetails = () => {
    const { id } = useParams();
    console.log(id);

    const [identifier, setIdentifier] = useState()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/cities/${id}`)
            .then(response => {
                setIdentifier(response.data.city)
                console.log(response.data.city);
            })
            .catch(err => console.log(err))
    }, [])

console.log(identifier); 
    
    return (
        <div>
            <h2 className='text-3xl text-center'>City: {identifier.city}</h2>

            {/* intineraries */}
            <div className="flex flex-row flex-wrap gap-4 m-3 bg-[#76A9FA]">
                <div className="itinerary m-3 p-3  rounded-md">
                    <img src="https://i.pinimg.com/474x/92/c6/6b/92c66b52754e5e38ecbfe142ed6ddf35.jpg " className="rounded-full w-40 h-40" alt="user" />
                    <h3 className="text-center m-3">User</h3>
                </div>
                <div className="p-2">
                    <h2>Itineraries of {identifier.city}</h2>
                    <h3 className="p-2">Price</h3>
                    <div className="flex flex-wrap">
                        <img className="flex mx-2 w-10 h-10" src={dollar} alt="dollar" />
                    </div>
                    <div className="p-2">
                        <h3 className="p-2">Duration:</h3>
                        <p className="p-2" ><i>duration</i></p>
                        <h3 className="p-2">Hashtags:</h3>
                        <p className="p-2"><i>#hashtagsCity</i></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventDetails