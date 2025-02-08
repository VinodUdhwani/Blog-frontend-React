import { useParams } from "react-router-dom";
import Base from "./Base";
import { useEffect, useState } from "react";
import { getPostByCategory } from "../services/post-service";
import { Col,Row } from "reactstrap";
import CategorySideMenu from "./categorySideMenu";
import Post from './post'
function CategoryPost(){
    const {categoryId}=useParams()
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        getPostByCategory(categoryId).then(data=>{
            // console.log(data)
            setPosts(data)
        }).catch(error=>{
            console.log(error)
        })
    },[categoryId])
    return(
        <Base>
            <Row>
                <Col className="border-0 mt-5 ms-5 shadow-0" md={
                    {
                        size:2
                    }
                }>
                    <CategorySideMenu/>
                </Col >
                <Col md={
                    {
                        size:8,
                    }
                }>
                    <h3 className="text-center">Available Blogs: ({posts.length})</h3>
                    {
                        posts && posts.map(post=>{
                            return <Post key={post.postId} data={post}/>
                        })
                    }

                    {
                        posts.length<=0 &&(
                            <h3 className="text-center">No blogs available in this category</h3>
                        )
                    }
                </Col>
            </Row>
        </Base>
    )
}
export default CategoryPost;