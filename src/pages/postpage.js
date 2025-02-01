import { Link, useParams } from "react-router-dom";
import Base from "../components/Base"
import { Card, CardBody, CardHeader, CardImg, CardSubtitle, CardText, CardTitle, Col, Container, Row } from "reactstrap";
import { useEffect, useState } from "react";
import { loadPostById } from "../services/post-service";
import { toast } from "react-toastify";
import { BASE_URL } from "../services/helper";
const PagePost=()=>{
    const{postId}=useParams()
    const[post,setPost]=useState(null)
    useEffect(()=>{
        loadPostById(postId).then(data=>{
            console.log(data)
            setPost(data)
        }).catch(error=>{
            console.log(error)
            toast.error("something went wrong")
        })
    },[])

    return(
        <Base>
           <Row>
                <Col md={
                    {
                        size:10,
                        offset:1
                    }
                }>
                    <Container>

                        <Link to={'/feed'}>Home</Link> {post && (<Link to=''>/{post.postTitle}</Link>)}

                        {
                            (post) && (
                            <Card className="mt-4 pt-3">
                                <CardHeader style={{fontWeight:700,fontSize:20}}>Posted By {post.userDto.name} on {post.addedDate}</CardHeader>
                                <CardBody>
                                    <CardText className="text-muted">Category: {post.categoryDto.categoryTitle}</CardText>
                                    <div className="divider" style={{
                                        width:'100%',
                                        height:'1px',
                                        backgroundColor:'#e2e2e2'
                                    }}>

                                    </div>
                                    <CardText>
                                        <h2 className="">{post.postTitle}</h2>
                                    </CardText>
                                    <CardImg className="image-container mt-3 shadow-sm" src={BASE_URL+`/blog/posts/view/image/`+post.imageName} alt="image not available" style={{maxWidth:'50%',maxHeight:'300px'}}
                                    >
                                    </CardImg>
                                    <CardText className="mt-3" dangerouslySetInnerHTML={{__html:post.content}}>
                                    </CardText>
                                </CardBody>
                            </Card>
                            )
                        }
                    </Container>
                </Col>
           </Row>
        </Base>
    )
}
export default PagePost;