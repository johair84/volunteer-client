import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


export default function Activities({activities}){
    const history = useHistory();
    const handleJoin = (activitesName) =>{
        history.push(`/book/${activitesName}`);
    }
  
    return (
       <div className="col-md-3" style={{marginBottom: '10px'}}>
            <img style={{height: '260px'}} src={require(`../../images/${activities.imgUrl}`)} alt="" />
            <h3>{activities.activitesName}</h3>
            <Button onClick={() => handleJoin(activities.activitesName)} variant="primary">Join </Button>
        </div>      
        
    );
};

