import { Link as Anchor } from 'react-router-dom';
import SignOut from './SignOut.jsx';

const navbar = () => {

  return (
  <div className="dropdown p-2">
    <button className="btn btn-outline-tertiary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Menu
    </button>
    <ul className="dropdown-menu">
      <li>
        <Anchor to={'/'} className='px-12 py-3 text-sm font-medium'>Home</Anchor>
      </li>
      <li>
        <Anchor to={'/cities'} className='px-12 py-3 text-sm font-medium'>Cities</Anchor>
      </li>
      <li><Anchor className="px-12 py-3 text-sm font-medium"  to={'/login'}>Login</Anchor></li>
      <li><SignOut/></li>
    </ul>
  </div>
  
  )
}

export default navbar