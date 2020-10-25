import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';


const ascensionList = {
    "Venti":
    {
        "20": {
            "Mora": "20,000",
            "Elemental Material 1": {
                "Vayuda Turquoise sliver": "1",
            },
            "Elemental Material 2": {
            },
            "Local Speciality": {
                "Cecilia": "3",
                "Region": "Mondstadt"
            },
            "Common Material": {
                "Slime Condensate": "3"
            }
        },
        "40": {
            "Mora": "20,000",
            "Elemental Material 1": {
                "Vayuda Turquoise Fragment": "3",
            },
            "Elemental Material 2": {
                "Hurricane Seed": "2"
            },
            "Local Speciality": {
                "Cecilia": "10",
                "Region": "Mondstadt"
            },
            "Common Material": {
                "Slime Condensate": "15"
            }
        }
    }

};

const Ascension = (props) => {
    if (ascensionList[props.character] === undefined) {
        return (<div></div>)
    } else {
        return (
            <div>
                <Tabs defaultActiveKey="20" id="uncontrolled-tab-example2">
                    <Tab eventKey="20" title="Level 20">
                        <div>
                            {JSON.stringify(ascensionList[props.character]["20"])}
                        </div>
                    </Tab>
                    <Tab eventKey="40" title="Level 40">
                        <div>
                            {JSON.stringify(ascensionList[props.character]["40"])}
                        </div>

                    </Tab>
                </Tabs>
            </div>
        )
    }
}

export default Ascension;