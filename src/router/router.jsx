import { createBrowserRouter} from 'react-router-dom';
import {Cities} from '../pages/Cities'
import Main from '../layouts/Main'
import Home2 from '../layouts/Home2';
import Details from '../layouts/Details'
import Login from '../pages/SignIn'
import SignUp from '../components/SignUp'
import ProtectedRoute from './ProtectedRoute';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [{
            path: '/',
            element: <Home2/>
            },
            {
            path: '/cities',
            element: 
                    <Cities/>
            },
            {
                path: '/cities/:id',
                element: <Details />
            },
            {
                path: '/login',
                element:
                        <Login/>
            },{
                path: '/signup',
                element: (<ProtectedRoute path='/'>
                    <SignUp/>
                </ProtectedRoute>) 
            },{
                path:'/404',
                element: <h1 className='text-4xl p-10 mx-auto'>ERROR</h1>
            }
        ]
    }
])

export default router