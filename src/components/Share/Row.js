export function TableRow(props) {
    return (
        <tr>
            <td>{props.ide}</td>
            <td>{props.title}</td>
            <td>{props.rel}</td>
            <td>
                <button className="btn btn-sm bg-info text-white">Share</button>
            </td>

        </tr>
    )
}
