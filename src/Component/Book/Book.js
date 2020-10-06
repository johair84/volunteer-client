import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const Book = () => {
    const {activitesName} = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [date, setDate] = useState('');
    const [description,setDescription] = useState('');

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/registration" } };

    const handleRegistration = () =>{
        const newRegistration = {...loggedInUser, activitesName,date, description};
        console.log(newRegistration);
        
        fetch('http://localhost:5000/addRegistration', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newRegistration)
           
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
        })

        history.replace(from);
    }

    return (
        <div style={{textAlign: 'center', width:'600px',}}>
            <h1>Hello {loggedInUser.name}</h1>
            <h1>Register as a Volunteer</h1>
            <h3>You are Now going to Registered "{activitesName}" acitivity</h3>

            <form >
                <Link to="/registration">Check Registered Events</Link>
                <p><span>Full Name: </span><input type="text" value={loggedInUser.name}/></p>
                <p><span>Email: </span><input type="text" value={loggedInUser.email}/></p>
                <p><span>Date: </span><input onChange={event => setDate(event.target.value)} /></p>
                <p><span>Description: </span><input onChange={event => setDescription(event.target.value)} /></p>
                <p><span>Acitivity: </span><input type="text" value={activitesName}/></p>
                <Button onClick={handleRegistration}>Book Now</Button>
            </form>
        </div>
    );
};

export default Book;