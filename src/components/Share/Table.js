import Table from 'react-bootstrap/Table';
import {TableRow} from "./Row";

export function ShareTable() {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>title</th>
                <th>created_at</th>
                <th>Share</th>
            </tr>
            </thead>
            <tbody>
            <TableRow ide="1"  title="Post victim" rel="02/02/2022" />
            <TableRow ide="2"  title="Post " rel="04/02/2022" />
            </tbody>
        </Table>
    );
}
