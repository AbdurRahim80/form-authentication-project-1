import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Home = () => {
    const authInfo = useContext(AuthContext);
    console.log(authInfo);
    return (
        <div>
           <h3>Name: {authInfo.name}</h3>
        </div>
    );
};

export default Home;