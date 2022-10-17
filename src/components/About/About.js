import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const About = () => {
    const {user}=useContext(AuthContext)
    return (
       <div>
        <h3>This Is a About page</h3>
        <h4>Name: {user?.name}</h4>
       </div>
    );
};

export default About;