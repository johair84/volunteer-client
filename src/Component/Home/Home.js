import React from 'react';
import { Button, Container, Form, FormControl } from 'react-bootstrap';
import Activities from '../Activities/Activities';


const Home = () => {
    

const activities = [
    {
        key: '000100',
        activitesName: 'Planting Trees',
        description: 'Save The World, Otherwise we die',
        imgUrl: 'animalShelter.png'
    },
    {
        key: '000101',
        activitesName: 'Clean The City',
        description: 'Save The World, Otherwise we die',
        imgUrl: 'childSupport.png'
    },
    {
        key: '000102',
        activitesName: 'Keep Slience',
        description: 'Save The World, Otherwise we die',
        imgUrl: 'clothSwap.png'
    },
    {
        key: '000103',
        activitesName: 'Save Water',
        description: 'Save The World, Otherwise we die',
        imgUrl: 'ITHelp.png'
    },
    {
        key: '000104',
        activitesName: 'Clean The River',
        description: 'Save The World, Otherwise we die',
        imgUrl: 'driveSafety.png'
    },
    {
        key: '000105',
        activitesName: 'NOHornes',
        description: 'Save The World, Otherwise we die',
        imgUrl: 'newBooks.png'
    },
    {
        key: '000106',
        activitesName: 'Stop Polition',
        description: 'Save The World, Otherwise we die',
        imgUrl: 'riverClean.png'
    },
    {
        key: '000107',
        activitesName: 'Learn Coding',
        description: 'Save The World, Otherwise we die',
        imgUrl: 'schoolSuffiles.png'
    }
   
]

    return (
        <div>
            <div style={{margin: '100px'}}>
                <h1>I GROW BY HEALPING PEOPLE IN NEED</h1>
                <Form inline className="justify-content-md-center">
                    <FormControl type="text" placeholder="Search" className="mr-sm-1 "/>
                    <Button variant="primary">Search</Button>
                </Form>
            </div>
             

            <Container>
            <div className="row">
                {
                    activities.map(activities=><Activities activities={activities} key={activities.key}></Activities>)
                }
            </div>
            </Container>
                

            
        </div>
    );
};

export default Home;