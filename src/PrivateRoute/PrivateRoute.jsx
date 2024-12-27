
import React, { useContext } from 'react';
import { AuthContex } from '../Context/Userprovider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const {user , lodding } = useContext(AuthContex);

    if(lodding){

        return <span className="loading loading-spinner text-error "></span>
    }

    if(user){

        return children;
    }

    return <Navigate to={'/login'}></Navigate>;
};

export default PrivateRoute;