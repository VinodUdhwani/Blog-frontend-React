import { Link, useNavigate, useParams } from "react-router-dom";
import Base from "../components/Base"
import { Button, Card, CardBody, CardHeader, CardImg, CardSubtitle, CardText, CardTitle, Col, Container, Form, Input, Row } from "reactstrap";
import { useEffect, useState } from "react";
import { loadPostById } from "../services/post-service";
import { toast } from "react-toastify";
import { BASE_URL } from "../services/helper";
import { addComment, getComments } from "../services/comment-service";
import { getCurrentUser, isLoggedIn } from "../auth/auth";
const PagePost=()=>{
    const navigate=useNavigate(undefined)
    const{postId}=useParams()
    const[post,setPost]=useState(null)
    const[comment,setComment]=useState({
        comment:''
    })
    const[postComments,setPostComments]=useState(null)
    useEffect(()=>{

        loadPostById(postId).then(data=>{
            // console.log(data)
            setPost(data)
        }).catch(error=>{
            console.log(error)
            toast.error("something went wrong")
        })

        getComments(postId).then(data=>{
            // console.log(data)
            setPostComments(data)
        }).catch(error=>{
            console.log(error)
        })

    },[])

    const handleComment=(event)=>{
        setComment({
            comment:event.target.value
        })
    }

    const submitComment=(event)=>{
        event.preventDefault()
        if(comment.comment==''){
            toast.error("type something")
            return
        }
        if(!isLoggedIn()){
            toast.error("you need to login")
            navigate('/login')
            return
        }

        post &&(
            addComment(comment,getCurrentUser().id,postId).then(data=>{
                console.log(data)
                toast.success("comment added")
                
            }).catch(error=>{
                console.log(error)
            }) 
        )
    }

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


           <Row className="ms-3">
                <Col className="mt-3" md={
                    {
                        size:5,
                        offset:1
                    }
                }>
                    <CardBody>
                        <CardText>
                            <h3>Comments ({post?.commentDto.length})</h3>
                        </CardText>
                    </CardBody>

                    <Container>
                        <CardBody>
                            {
                            postComments &&(
                            postComments.map(comment=>{
                                return <CardText className="ms-3" key={comment.commentId}>
                                    {comment.comment}
                                </CardText>
                            })
                            )
                            }

                            <Input type="textarea" placeholder="Enter Comment" onChange={handleComment} name="comment" value={comment.comment}></Input>
                            <Button onClick={submitComment} type="submit" className="mt-1">Submit</Button>
                        </CardBody>
                    </Container>
                </Col>
           </Row>
        </Base>
    )
}
export default PagePost;