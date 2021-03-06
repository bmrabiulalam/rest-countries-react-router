import React from 'react';
import {Card, Button} from 'react-bootstrap';

const News = (props) => {
    return (
        <Card className="my-3" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.article.urlToImage} />
            <Card.Body>
                <Card.Title>{props.article.title}</Card.Title>
                <Card.Text>
                    {props.article.description}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default News;