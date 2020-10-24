import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const database = {};


const Dropdown = (props) => {

    if (props.input === null) {
        return (
            <div></div>
        )
    }

    return (
        <div>

            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Home">
                {props.input}
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    Will's AR40 Build for {props.input}
                </Tab>
                <Tab eventKey="lore" title="Lore" >
                    {props.input} LORE POGGERS
                </Tab>
            </Tabs>

        </div>


    )
}

export default Dropdown;