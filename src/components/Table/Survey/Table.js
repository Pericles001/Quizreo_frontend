import Table from 'react-bootstrap/Table';
import {TableRow} from "../Row";

export function SurveyTable() {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>title</th>
                <th>content</th>
                <th>created_at</th>
                <th>details</th>
                <th>update</th>
                <th>delete</th>
            </tr>
            </thead>
            <tbody>
            <TableRow ide="1" title="Post victim " content="How do you feel" rel="02/02/2022"/>
            <TableRow ide="1"
                      title="Post victim "
                      content="How do you feel"
                      rel="02/02/2022"/>
            <TableRow
                ide="1" title="Post victim " content="How do you feel" rel="02/02/2022"/>
            <TableRow ide="1"
                      title="Post victim "
                      content="How do you feel"
                      rel="02/02/2022"/>
            </tbody>
        </Table>
    );
}
