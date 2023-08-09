import NavigationBar from './NavigationBar'
import User from '../assets/user.jpg'

const Header = () => {
  return (
    <div className='flex flex-row gap-3 p-2'>
        <a className='flex flex-column flex-grow-1 text-tertiary ' href=''> 
          <span className='fs-2 '>
            My Tinerary
          </span>
          <p className=''>Find your perfect trip, designed by insiders who love and know their cities!</p>
        </a>
        
        <div className='flex justify-end p-2 '>
        <div className='p-2'>
          <a href="#">
            <img src={User} alt="User" width={35}/>
          </a>
        </div>
        <NavigationBar/>
        </div>
    </div>
  )
}

export default Header