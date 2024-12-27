import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Componentes/Login/Login';
import Register from './Componentes/Register/Register';
import Home from './Componentes/Home/Home';
import Root from './Componentes/Root/Root';
import Userprovider from './Context/Userprovider';
import Orders from './Componentes/Orders/Orders';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      }
      ,
      {
        path:'/login',
        element:<Login></Login>
      }
      ,
      {
        path:'/register',
        element:<Register></Register>
      }
      ,
      {
        path:'/orders',
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      }
      
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Userprovider>
        <RouterProvider router={router} />
     </Userprovider>
  </StrictMode>,
)

// userprovider akta antina . antina er  vitor over all sob gulo jinis bosiya dilam . and er vitor a ja gula thakbe seta children hisab a pabo ;