export function TableRow(props) {
    return (
        <tr>
            <td>{props.ide}</td>
            <td>{props.title}</td>
            <td>{props.content}</td>
            <td>{props.rest}</td>
            <td>{props.rel}</td>
            <td>
                <button className="btn btn-sm bg-info text-white">Share</button>
            </td>
            <td>
                <button className="btn btn-sm bg-warning text-white">Update</button>
            </td>
            <td>
                <button className="btn btn-sm bg-danger text-white">Delete</button>
            </td>
        </tr>
    )
}
