import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardColumns, CardHeader, CardText, Container} from 'reactstrap'

function Post(props) {
    return(
        <Container className='mt-4'>
            <Card className='shadow-sm'>
                <CardHeader>
                    <h3>{props.data.postTitle}</h3>
                </CardHeader>
                <CardBody>
                    <CardColumns><div>Category: {props.data.categoryDto.categoryTitle}</div></CardColumns>
                    <CardText dangerouslySetInnerHTML={{__html:props.data.content.substring(0,50)+'....'}}>
                        
                    </CardText>
                </CardBody>
                <Container className='mb-2'>
                    <Link to={'/post/'+props.data.postId} className='btn btn-secondary'>Read More</Link>
                </Container>
            </Card>
        </Container>
    )
}

export default Post