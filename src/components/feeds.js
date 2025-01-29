import { useEffect, useState } from "react";
import { Card, CardText, CardHeader, Col, Container, Row ,Button,CardBody,CardColumns} from "reactstrap";
import { getAllPost } from "../services/post-service";
import Base from './Base'
import Post from "./post";

const Feeds=()=>{
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        getAllPost().then((data)=>{
            console.log(data)
            setPosts(data)
        }).catch(error=>{
            console.log(error)
        })
    },[])
    return(
        <Base>
           <Row>
                <Col md={{
                    size:10,
                    offset:1,
                }}>
                    {
                        posts.map(post=>{
                           return (
                            <Container className='mt-4'>
                                <Card>
                                    <CardHeader>
                                        <h3>{post.content.postTitle}</h3>
                                    </CardHeader>
                                    <CardBody>
                                        <CardColumns><div>Category: {post.content.categoryDto.categoryTitle}</div></CardColumns>
                                        <CardText>{post.content.content}</CardText>
                                    </CardBody>
                                    <Container className='ms-0'>
                                        <Button>Read More</Button>
                                    </Container>
                                </Card>
                            </Container>
                           )
                        })
                    }
                </Col>
           </Row>
        </Base>
    )
}
export default Feeds;
