import { createBrowserRouter} from 'react-router-dom';
import Cities from '../pages/Cities'
import Main from '../layouts/main'
import Home from '../layouts/Home';
import Home2 from '../layouts/Home2';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [{
            path: '/',
            element: <Home/>
            },
            {
            path: '/cities',
            element: <Cities/>
            },
            {
                path: '/login',
                element: <Home2/>
            }
        ]
    }
])

export default router