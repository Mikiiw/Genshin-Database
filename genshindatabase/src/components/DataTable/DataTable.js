import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Dropdown from '../Dropdown/Dropdown.js'
import './DataTable.css'
import DataIcon from './Dataicon.js'


const DataTable = () => {

    const [character, setCharacter] = useState(null)
    let tableIcon='table-icon';
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
                            <img src="img/201848-diluc-64x64-1.png" alt="Diluc" className={tableIcon} onClick={clickEvent} />
                        </td>
                        <td>
                            <img src="img/201855-mona-64x64-1.png" alt="Mona" className={tableIcon} onClick={clickEvent}/>
                        </td>
                        <td>
                            <div>
                            <img src="img/Character_Xiao_Thumb.png" alt="Xiao" className={tableIcon} onClick={clickEvent}/>
                                <img src="img/201849-venti-64x64-1.png" alt="Venti" className={tableIcon} onClick={clickEvent}/>
                                <img src="img/201854-jean-64x64-1.png" alt="Jean" className={tableIcon} onClick={clickEvent}/>
                            </div>
                        </td>
                        <td>
                            <img src="img/201852-keqing-64x64-1.png" alt="Keqing" className={tableIcon} onClick={clickEvent}/>
                        </td>
                        <td />
                        <td>
                            <img src="img/201851-qiqi-64x64-1.png" alt="Qiqi" className={tableIcon} onClick={clickEvent}/>
                        </td>
                    </tr>
                    <tr>
                        <td>4*</td>
                        <td>
                            <img src="/img/201856-xiangling-64x64-1.png" alt="Xiangling" className={tableIcon} onClick={clickEvent}/>
                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                        <td>
                            <img src="img/201850-fischl-64x64-1.png" alt="Fischl" className={tableIcon} onClick={clickEvent}/>
                        </td>
                        <td>

                        </td>
                        <td>
                            <img src="img/201858-chongyun-64x64-1.png" alt="Chongyun" className={tableIcon} onClick={clickEvent}/>
                        </td>
                    </tr>
                </tbody>
            </Table>

            <Dropdown input = {character}/>
        </div>
    )
}

export default DataTable;