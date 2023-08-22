import axios from 'axios';
import  {Card } from '../components/Card'
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

export const Cities = () => {

  const [cities2, setCities] = useState();

  useEffect(() => {
      console.log("UseEffect executed");
      axios.get('http://localhost:8000/api/cities')
          .then((response) => {
          // console.log(response.data);
          setCities(response.data.city)
        })
        .catch(err => console.log(err))
  }, [])

  console.log(cities2);

  const inputController = async (city) => {
     console.log(city.target.value);

    try{
      const response = await axios.get(`http://localhost:8000/api/cities?city=${city.target.value}`)
        console.log(response.data.cities2);
        setCities(response.data.cities2);
    }catch(error){
      console.log(error);
    }
}

  return (
    <div className="flex flex-col m-4 items-center text-center">

    <div className="relative">
      <label htmlFor="Search" className="sr-only"> Search </label>

      <input
        onChange={inputController}
        type="text"
        id="Search"
        placeholder="Search for..."
        className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
      />

      <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
        <button type="button" className="text-gray-600 hover:text-gray-700">
          <span className="sr-only">Search</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </span>
    </div>


      <h3 className="text-3xl my-4 font-bold">Cities</h3>
      <div className=''>
          {
            cities2?.map((city) => {
              return (
                <Link key={city._id} to={`/cities/${city._id}`}>
                  <Card name={city.name} description={city.description} province={city.province} image={city.image} className=""/>
                </Link>
              )
            })
          }
      </div>
    </div>
  )}

