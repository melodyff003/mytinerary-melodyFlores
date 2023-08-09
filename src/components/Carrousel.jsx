import { useState} from 'react'
import '../styles/Carrousel.css'


function Carrousel (){
  let [index, setIndex] = useState(0);

  const image = [
    {
      title: 'Ushuaia',
      url: 'https://denomades.s3.us-west-2.amazonaws.com/blog/wp-content/uploads/2018/08/30192236/26824519578_6a65e00419_o.jpg'
    },
    {
      title: 'Santa Cruz',
      url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/a2/eb/97/um-lugar-unico-no-mundo.jpg?w=700&h=500&s=1'
    },
    {
      title: 'Neuquen',
      url: 'https://www.neuqueninforma.gob.ar/wp-content/uploads/2018/01/WEB-PRIMERA-Pen%C3%ADnsula-de-Quetrihu%C3%A9-Villa-La-Angostura.jpg'
    }
  ];

  // useEffect(
  //   () => {
  //     setInterval(() => {
  //       setIndex(index => index +1)
  //     }, 1500)
  //   },
  //   [image]
  // )

  const handlePrev = () => {
      setIndex(index => index - 1)
  }

  const handleNext = () => {
      setIndex(index => index + 1)
  }

  
  // container mx-auto justify-content-center
  return (
    <div className='mx-auto max-w-screen-xl px-2 pb-6 pt-12 sm:px-4 lg:px-6 lg:pt-20'>
      <h2 className='fs-2'>Popular Mytineraries</h2>
      <div className=' flex gap-2 m-2'>
        <div>
            <img
            alt="Signage"
            src={image[index].url}
            className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
            />

            <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
              <a className="icon-link" href="#">
                <svg className="bi" aria-hidden="true"><use xlinkHref="#box-seam"></use></svg>
                {image[index].title}
              </a> 
            </div>
        </div>


      </div>
      <div>
        <button className="btn btn-outline-tertiary" type="submit" onClick={handlePrev}>Previous</button>
        <button className="btn btn-outline-tertiary" type="submit" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default Carrousel
