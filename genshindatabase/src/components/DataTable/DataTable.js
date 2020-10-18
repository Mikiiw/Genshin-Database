import React from 'react';
import Table from 'react-bootstrap/Table';

const DataTable = () => {

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Role</th>
                    <th>Tier</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Fire Man</td>
                    <td>
                        <img src="https://www.gensh.in/fileadmin/Database/Characters/Diluc/Character_Diluc_XL.png" alt="Diluc" width="150" height="100" />
                    </td>
                    <td>SSS+</td>
                    <td>Main DPS</td>
                </tr>
                <tr>
                    <td>Knight Maid</td>
                    <td>
                        <img src="https://www.gensh.in/fileadmin/Database/Characters/Noelle/Character_Noelle_XL.png" alt="Barbara" width="150" height="100" />
                    </td>
                    <td>SS</td>
                    <td>Tank</td>
                </tr>
                <tr>
                    <td>MC</td>
                    <td>
                        <img src="https://www.gensh.in/fileadmin/Database/Characters/Traveller/Character_Aether_XL.png" alt="Traveller" width="150" height="100" />
                    </td>
                    <td>S</td>
                    <td>Omnipotent</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default DataTable;