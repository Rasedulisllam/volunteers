import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {
    const {user,loading}=useAuth();

    // check auth loading or not 
    if(loading){
        return <div style={{paddingTop:'10rem'}}>
            <Spinner animation="border" variant="danger" />
        </div>
    }

    return (
        <Route
            {...rest}
            render={({location})=> user?.email?children:(
                    <Redirect
                        to={{
                            pathname:'/register',
                            state:{from:location}
                        }}
                    ></Redirect>
            )}
        >
            
        </Route>
    );
};

export default PrivateRoute;