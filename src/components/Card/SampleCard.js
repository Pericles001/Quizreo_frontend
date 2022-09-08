import Card from 'react-bootstrap/Card';

export function SampleCard(props) {
    return (
        <Card className="mt-5 mb-5">
            <Card.Header> {props.title} </Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>
                        {' '}
                        {props.quote}
                        {' '}
                    </p>
                    <footer className="blockquote-footer">
                        <cite title="Source Title">{props.author}</cite>
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}
