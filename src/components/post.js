import React from 'react'
import { Button, Card, CardBody, CardColumns, CardHeader, CardText, Container } from 'reactstrap'

function Post(props) {
    return(
        <Container className='mt-4'>
            <Card>
                <CardHeader>
                    <h3>{props.data.postTitle}</h3>
                </CardHeader>
                <CardBody>
                    <CardColumns><div>Category: {props.data.categoryDto.categoryTitle}</div></CardColumns>
                    <CardText>{props.data.content}</CardText>
                </CardBody>
                <Container className='ms-0'>
                    <Button>Read More</Button>
                </Container>
            </Card>
        </Container>
    )
}

export default Post