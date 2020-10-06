import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { UserContext } from '../../App';

const Registration = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [registration, setRegistration] = useState([]);

   
    

    useEffect( () =>{
        fetch('http://localhost:5000/registrations?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setRegistration(data));
    }, [])
    return (
        <div>
            <h3>You have Registered: {registration.length} acitivity</h3>
            {
                registration.map( reg => <div style={{'border': '1px solid lightgray', 'margin': '5px'}}>
                        <h4> Activity Name: {reg.activitesName} </h4>
                        <h5> Date: {reg.date} </h5>
                        <Button variant="warning">Cancel</Button> 
                    </div>)
            }
        </div>
    );
};

export default Registration;