import { useState, useEffect} from 'react'
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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index => index + 1)
        if(index == 2){
          setIndex(index = 0)
          // console.log(index);
          return index;
        }else{
          // console.log(index);
          return index;
        }
    }, 2500);
    return (() => {
      clearInterval(interval)
      // console.log(index);
    }); 
  }, [index]);


  const handlePrev = () => {
      setIndex(index => index - 1)
      if(index == 0){
        setIndex(index = 2)
        console.log(index);
        return index;
      }else{
        console.log(index);
        return index;
      }

  }

  const handleNext = () => {
      setIndex(index => index + 1)
      if(index == 2){
        setIndex(index = 0)
        // console.log(index);
        return index;
      }else{
        // console.log(index);
        return index;
      }
  }

  
  // container mx-auto justify-content-center
  return (
    <div className='mx-auto max-w-screen-xl px-1 pb-4 pt-8 sm:px-2 lg:px-4 lg:pt-15'>
      <h2 className='text-2xl font-bold sm:text-3xl'>Popular Mytineraries</h2> 
      <div className='  grid grid-cols-2 group flex flex-wrap sm:flex-wrap justify-items-center gap-4 m-2'>
        <div className='group p-3 w-auto'>
            <img
            alt={image[index].title}
            src={image[index].url}
            className="group-hover:opacity-80 w-80 rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
            />
            <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4 flex items-center space-x-3">
                <svg className="h-6 w-6 stroke-sky-500 group-hover:stroke-sky" fill="none" viewBox="0 0 24 24"></svg>
                <a className="text-slate-900 group-hover:text-sky text-md font-semibold" href='/cities'>{image[index].title}</a>
            </div>
        </div>
        <div className='group p-3'>
            <img
            alt={image[index].title}
            src={image[index].url}
            className="group-hover:opacity-80 w-80 rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
            />
            <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4 flex items-center space-x-3">
                <svg className="h-6 w-6 stroke-sky-500 group-hover:stroke-sky" fill="none" viewBox="0 0 24 24"></svg>
                <a className="text-slate-900 group-hover:text-sky text-md font-semibold" href='/cities'>{image[index].title}</a>
            </div>
        </div>
        <div className='group p-3'>
            <img
            alt={image[index].title}
            src={image[index].url}
            className="group-hover:opacity-80  w-80 rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
            />
            <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4 flex items-center space-x-3">
                <svg className="h-6 w-6 stroke-sky-500 group-hover:stroke-sky" fill="none" viewBox="0 0 24 24"></svg>
                <a className="text-slate-900 group-hover:text-sky text-md font-semibold" href='/cities'>{image[index].title}</a>
            </div>
        </div>
        <div className='group p-3'>
            <img
            alt={image[index].title}
            src={image[index].url}
            className="group-hover:opacity-80 w-80 rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
            />
            <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4 flex items-center space-x-3">
                <svg className="h-6 w-6 stroke-sky-500 group-hover:stroke-sky" fill="none" viewBox="0 0 24 24"></svg>
                <a className="text-slate-900 group-hover:text-sky text-md font-semibold" href='./cities'>{image[index].title}</a>
            </div>
        </div>
        {/* falta funcionalidad en botón de cities */}
      </div>
      <div className='flex gap-2'>
        <button className="btn inline-block rounded p-2 text-sm font-small text-sky outline outline-offset-2 outline-1 focus:ring focus:ring-sky-400" type="submit" onClick={handlePrev}>Previous</button>
        <button className="btn inline-block rounded p-2 text-sm font-small text-sky outline outline-offset-2 outline-1 focus:ring focus:ring-sky-400" type="submit" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default Carrousel
