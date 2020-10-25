import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Ascension from './Ascension.js';
import Lore from './Lore.js';


const Dropdown = (props) => {

    if (props.input === null) {
        return (
            <div></div>
        )
    }

    return (
        <div>

            <Tabs defaultActiveKey="lore" id="uncontrolled-tab-example">
                <Tab eventKey="lore" title="Lore" >
                    <Lore character={props.input} />
                </Tab>
                <Tab eventKey="ascension" title="Ascension" >
                    <Ascension character={props.input} />
                </Tab>
                <Tab eventKey="build" title="Build" >
                </Tab>
            </Tabs>

        </div>


    )
}

export default Dropdown;