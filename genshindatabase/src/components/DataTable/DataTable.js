import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Dropdown from '../Dropdown/Dropdown.js'
import DataIcon from './Dataicon.js'


const DataTable = () => {

    const [character, setCharacter] = useState(null)

    //Uses the regular img html tag to get the onClick event handler
    const clickEvent = event => {
        setCharacter(event.target.alt)

    }

    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Tier</th>
                        <th>Pyro</th>
                        <th>Hydro</th>
                        <th>Anemo</th>
                        <th>Electro</th>
                        <th>Dendro</th>
                        <th>Cryo</th>
                        <th>Geo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>5*</td>
                        <td>
                            <img src="img/201848-diluc-64x64-1.png" alt="Diluc" onClick={clickEvent} />
                        </td>
                        <td>
                            <img src="img/201855-mona-64x64-1.png" alt="Mona" onClick={clickEvent}/>
                        </td>
                        <td>
                            <div>
                                <img src="img/201849-venti-64x64-1.png" alt="Venti" onClick={clickEvent}/>
                                <img src="img/201854-jean-64x64-1.png" alt="Jean" onClick={clickEvent}/>
                            </div>
                        </td>
                        <td>
                            <img src="img/201852-keqing-64x64-1.png" alt="Keqing" onClick={clickEvent}/>
                        </td>
                        <td />
                        <td>
                            <img src="img/201851-qiqi-64x64-1.png" alt="Qiqi" onClick={clickEvent}/>
                        </td>
                    </tr>
                    <tr>
                        <td>4*</td>
                        <td>
                            <img src="/img/201856-xiangling-64x64-1.png" alt="Xiangling" onClick={clickEvent}/>
                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                        <td>
                            <img src="img/201850-fischl-64x64-1.png" alt="Fischl" onClick={clickEvent}/>
                        </td>
                        <td>

                        </td>
                        <td>
                            <img src="img/201858-chongyun-64x64-1.png" alt="Chongyun" onClick={clickEvent}/>
                        </td>
                    </tr>
                </tbody>
            </Table>

            <Dropdown input = {character}/>
        </div>
    )
}

export default DataTable;