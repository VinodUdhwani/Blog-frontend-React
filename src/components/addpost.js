import { Button, Card, CardBody, CardHeader, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { loadCategories } from "../services/category-service";
import { useEffect, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { addPost } from "../services/post-service";
import { toast } from "react-toastify";
import { getCurrentUser } from "../auth/auth";

const AddPost=()=>{

    const [categories,setCategories]=useState([])
    const editor=useRef(null)
    // const[content,setContent]=useState('')
    const[user,setUser]=useState(undefined)
    const [postData,setPostData]=useState({
        postTitle:'',
        content:'',
        categoryId:''
    })

    const handleEvent=(event)=>{
        setPostData({
            ...postData,
            [event.target.name]:event.target.value
        })
    }

    const handleContentEvent=(event)=>{
        setPostData({
            ...postData,
            "content":event
        })
    }
    const submitPostData=(event)=>{
        event.preventDefault();

        if(postData.postTitle.trim()==='' || postData.content.trim() === '' || postData.categoryId.trim()===''){
            toast.error("post data cannot be empty!")
            return;
        }
            
        postData['userId']=user.id;   // add another field in postData object as per requirement
        addPost(postData).then(data=>{
            console.log(data)
            toast.success("post created successfully")
            setPostData({
                postTitle:'',
                content:'',
                categoryId:''
            })
        }).catch(error=>{
            console.log(error)
        })
    }


    useEffect(()=>{
        setUser(getCurrentUser())
        loadCategories().then(data=>{
            // console.log(data)
            setCategories(data)
        }).catch(error=>{
            console.log(error)
        })
    },[])
    
    return(
        <Container>
            <Card className="shadow-sm mt-4">

                {/* {JSON.stringify(postData)} */}
                <CardHeader className="text-center">
                    <h2>Hey,What's in your mind today!</h2>
                </CardHeader>
                <CardBody>
                    <Form onSubmit={submitPostData}>
                        <FormGroup>
                            <Label for="title">Post Title</Label>
                            <Input type="text" placeholder="Enter post title here" id="title" name="postTitle" onChange={handleEvent}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="content">Post Content</Label>
                            {/* <Input type="textarea" placeholder="Write here" id="content"></Input> */}

                            <JoditEditor
                                ref={editor}
                                value={postData.content}
                                name="content"
                                onChange={handleContentEvent}
                            />

                        </FormGroup>
                        <FormGroup>
                            <Label for="category">Post Category</Label>
                            <Input type="select" placeholder="Enter post title here" id="title" defaultValue={0} name="categoryId" onChange={handleEvent}>
                            
                                <option disabled value={0}>--Select Category--</option>
                                { 
                                    categories.map(category=>{
                                       return (
                                        <option value={category.categoryId} key={category.categoryId}>
                                            {category.categoryTitle}
                                        </option>
                                       )
                                    })
                                }
                                
                            </Input>
                            
                        </FormGroup>

                        <Container className="text-center">
                            <Button type="submit" color="primary">Create</Button>
                            <Button type="reset" color="danger" className="ms-2">Reset</Button>
                        </Container>
                    </Form>
                </CardBody>

            </Card>
            
        </Container>
    )
}
export default AddPost;