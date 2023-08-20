import NavigationBar from './navigationBar'
import User from '../assets/user.jpg'

const Header = () => {
  return (
    <div className='flex flex-row gap-3 p-2'>
        <a className='flex flex-column flex-grow-1 text-tertiary ' href=''> 
          <span className='fs-2 '>
            My Tinerary
          </span>
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