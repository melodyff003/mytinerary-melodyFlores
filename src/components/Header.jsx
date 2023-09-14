import NavigationBar from './navigationBar'
import defaultPhoto from '../assets/user.jpg'
import { useSelector } from 'react-redux'

const Header = () => {
  const user = useSelector(store => store.userReducer.user);
  console.log(user);

  return (
    <div className='flex flex-row gap-3 p-2'>
        <a className='flex flex-column flex-grow-1 text-tertiary ' href=''> 
          <span className='fs-2 '>
            My Tinerary
          </span>
        </a>
        
        <div className='flex justify-end p-2 '>
          <div className='p-2 w-[100px] h-[100px] rounded-full object-cover'>
            <img src={user ? user.photo: defaultPhoto} alt="User" width={35}/>
          </div>
          <NavigationBar/>
        </div>
    </div>
  )
}

export default Header