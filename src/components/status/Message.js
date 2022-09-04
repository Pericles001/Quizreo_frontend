export function StatusMsg(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 mx-auto" style={{marginTop: "50px"}}>
                    <div className={props.color} role="alert">
                        {props.message}
                    </div>
                </div>
            </div>
        </div>
    )
}
