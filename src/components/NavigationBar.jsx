import { Link as Anchor } from 'react-router-dom';

const navbar = () => {
  return (
  <div className="dropdown p-2">
    <button className="btn btn-outline-tertiary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Menu
    </button>
    <ul className="dropdown-menu">
      <li>
        <Anchor to={'/'}>Home</Anchor>
      </li>
      <li>
        <Anchor to={'/cities'} className='p-2'>Cities</Anchor>
      </li>
      <li><Anchor className="dropdown-item"  to={'/login'}>Login</Anchor></li>
    </ul>
  </div>
  
  )
}

export default navbar