import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar/NavBar.js';
import DataTable from './components/DataTable/DataTable.js';


const App = () => {

    return (
        <div>

            <NavBar />

            <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

        <DataTable />

        </div>

    )
}

export default App;