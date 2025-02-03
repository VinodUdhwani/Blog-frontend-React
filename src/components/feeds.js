import { useEffect, useState } from "react";
import {Col, Container, Row ,Pagination,PaginationItem,PaginationLink} from "reactstrap";
import { getAllPost } from "../services/post-service";
import Base from './Base'
import Post from "./post";
import { toast } from "react-toastify";

const Feeds=()=>{
    const [posts,setPosts]=useState(null)
    useEffect(()=>{
        getAllPost(0,5).then((data)=>{
            console.log(data)
            setPosts(data)
        }).catch(error=>{
            console.log(error)
        })
    },[])

    const changePageContent=(pageNumber=0,pageSize=5)=>{

        if(pageNumber<0)
            return
        getAllPost(pageNumber,pageSize).then(data=>{
            console.log(data)
            setPosts(data)
            window.scroll(0,0)
        }).catch(error=>{
            toast.error("something went wrong")
        })
    }
    return(
        <Base>
           <Row>
                <Col md={
                    {
                        size:10,
                        offset:1,
                    }
                }>
                    {
                        <h3 className="text-center">Available Blogs: ({posts?.totalElements})</h3>
                    }
                    
                    {
                        posts?.content.map(post=>{
                            return <Post key={post.postId} data={post} />
                        })
                    }

                    <Container className='mt-3 text-center'>
                        <Pagination size='lg'>
                            <PaginationItem  onClick={()=>changePageContent(--posts.pageNumber)} disabled={posts?.pageNumber==0}>
                                <PaginationLink
                                previous>
                                    Previous
                                </PaginationLink>

                            </PaginationItem>
                            {
                                
                                [...Array(posts?.totalPages)].map((item,index)=>{
                                    return(
                                        <PaginationItem onClick={()=>changePageContent(index)} active={posts?.pageNumber==index} key={index}>
                                            <PaginationLink>
                                                {index+1}
                                            </PaginationLink>
                                        </PaginationItem>
                                    )
                                })
                            }
                            <PaginationItem>
                                <PaginationLink onClick={()=>changePageContent(++posts.pageNumber)} disabled={posts?.lastPage}
                                next
                                >
                                    Next
                                </PaginationLink>
                            </PaginationItem>
                        </Pagination>
                    </Container>
                </Col>
           </Row>
        </Base>
    )
}
export default Feeds;
