import { useEffect, useState } from "react";
import AddPost from "../../components/addpost";
import Base from "../../components/Base";
import { getCurrentUser, isLoggedIn } from "../../auth/auth";
import { getPostByUser } from "../../services/post-service";
import { toast } from "react-toastify";
import { Container } from "reactstrap";
import Post from "../../components/post"
import { deletePost } from "../../services/post-service";
const DashBoard=()=>{
    const[posts,setPosts]=useState([])

    const removePost=(postId)=>{
        
        deletePost(postId).then(data=>{
            console.log(postId)
            console.log(data);
            toast.success("post deleted successfully")

            getPostByUser(getCurrentUser().id).then(data=>{
                console.log(data)
                setPosts(data)
            }).catch(error=>{
                console.log(error)
                toast.error("error in data fecting")
            })
            
        }).catch(error=>{
            console.log(error)
            toast.error("something went wrong.")
        })
    }

    useEffect(()=>{

        if(!isLoggedIn()){
            return
        }

        getPostByUser(getCurrentUser().id).then(data=>{
            console.log(data)
            setPosts(data)
        }).catch(error=>{
            console.log(error)
            toast.error("error in data fecting")
        })

    },[])

    return(
        <Base>
            <AddPost/>
            <Container>
                <h3 className="text-center mt-4">Posted Blogs: ({posts.length})</h3>
                {
                    posts.map(post=>{
                        return <Post key={post.postId} data={post} delete={()=>removePost(post.postId)} />
                    })
                }
            </Container>
        </Base>
    )
}
export default DashBoard;