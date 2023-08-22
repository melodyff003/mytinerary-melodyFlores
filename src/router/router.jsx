import { createBrowserRouter} from 'react-router-dom';
import {Cities} from '../pages/Cities'
import Main from '../layouts/Main'
import Home2 from '../layouts/Home2';
import Details from '../layouts/Details'


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
            element: <Cities/>
            },
            {
                path: '/cities/:id',
                element: <Details />
            },
            {
                path: '/login',
                element: <Home2/>
            }
        ]
    }
])

export default router