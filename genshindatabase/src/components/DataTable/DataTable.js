import React from 'react';
import Table from 'react-bootstrap/Table';


const DataTable = () => {

    return (
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
                        <img src="img/201848-diluc-64x64-1.png" alt="Diluc"/>
                    </td>
                    <td>
                        <img src="img/201855-mona-64x64-1.png" alt="Mona"/>
                    </td>
                    <td>
                        <div>                        
                            <img src="img/201849-venti-64x64-1.png" alt="Venti"/>
                            <img src="img/201854-jean-64x64-1.png" alt="Jean"/>
                        </div>
                    </td>
                    <td>
                        <img src="img/201852-keqing-64x64-1.png" alt="Keqing"/>
                    </td>
                    <td/>
                    <td>
                        <img src="img/201851-qiqi-64x64-1.png" alt="Qiqi"/>
                    </td>
                </tr>
                <tr>
                    <td>4*</td>
                    <td>
                        <img src="/img/201856-xiangling-64x64-1.png" alt="Xiangling"/>
                    </td>
                    <td>

                    </td>
                    <td>

                    </td>
                    <td>
                        <img src="img/201850-fischl-64x64-1.png" alt="Fischl"/>
                    </td>
                    <td>

                    </td>
                    <td>
                        <img src="img/201858-chongyun-64x64-1.png" atl="Chongyun"/>
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}

export default DataTable;