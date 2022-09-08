import Table from 'react-bootstrap/Table';
import {TableRow} from "./Row";

export function TrialTable() {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>title</th>
                <th>type</th>
                <th>duration</th>
                <th>details</th>
                <th>update</th>
                <th>delete</th>
            </tr>
            </thead>
            <tbody>
            <TableRow ide="1" title="Post victim" type="Gon" count="6"/>
            <TableRow ide="2" title="Post " type="Kilua" count="7"/>
            </tbody>
        </Table>
    );
}
