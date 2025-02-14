import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Container, Form, FormGroup, Input, Label } from "reactstrap";
import JoditEditor from "jodit-react";
import { useState,useRef } from 'react';
import {loadCategories} from '../services/category-service'
import {loadPostById, updatePost} from '../services/post-service'
import { toast } from 'react-toastify';
const UpdateBlog=()=>{
    const {blogId}=useParams()
    const [categories,setCategories]=useState([])
    const editor=useRef(null)
    const[post,setPost]=useState(null)

    useEffect(()=>{
        loadCategories().then(data=>{
            setCategories(data)
        }).catch(error=>{
            console.log(error)
        })

        loadPostById(blogId).then(data=>{
            // console.log(data)
            setPost({...data,categoryId:data?.categoryDto.categoryId})
        }).catch((error)=>{
            console.log(error)
        })
    },[])

    const handleEvent=(event)=>{
        console.log(event.target.value)
        setPost({
            ...post,
            [event.target.name]:event.target.value
        })
    }
    const handleContent=(event)=>{
        setPost({
            ...post,
            "content":event
        })
    }

    const updation=(event)=>{
        event.preventDefault()

        post && (
            updatePost(post.postId,post).then(data=>{
                console.log(data)
                toast.success("blog updated successfully")
            }).catch(error=>{
                console.log(error)
                toast.error("update failed")
            })
        )
    }
    return(
    <Container>
        <Card className="shadow-sm mt-4" color="dark" inverse>
            {/* {JSON.stringify(post.categoryId)} */}
            <CardHeader className="text-center">
                <h2>Update Your Blog Here !</h2>
            </CardHeader>
            <CardBody>
                <Form onSubmit={updation}>
                    <FormGroup>
                        <Label for="title">Post Title</Label>
                        <Input type="text" placeholder="Enter post title here" id="title" name="postTitle" onChange={handleEvent} value={post?.postTitle}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="content">Post Content</Label>
                        {/* <Input type="textarea" placeholder="Write here" id="content"></Input> */}

                        <JoditEditor
                            ref={editor}
                            value={post?.content}
                            name="content"
                            onChange={handleContent}
                        />

                    </FormGroup>

                    <FormGroup>
                        <Label for="image">Post Image</Label>
                        <Input type="file" id="image" onChange={''}/>
                    </FormGroup>


                    <FormGroup>
                        <Label for="category">Post Category</Label>
                        <Input 
                            type="select" 
                            id="title" 
                            name="categoryId" 
                            onChange={handleEvent}
                            value={post?.categoryId}
                        >
                        
                            <option disabled value={0}>--Select Category--</option>
                            { 
                                categories.map(category=>{
                                return (
                                    <option value={category.categoryId} key={category.categoryId} >
                                        {category.categoryTitle}
                                    </option>
                                )
                                })
                            }
                            
                        </Input>
                        
                    </FormGroup>

                    <Container className="text-center">
                        <Button type="submit" color="warning">Update</Button>
                        <Button type="reset" color="danger" className="ms-2">Reset</Button>
                    </Container>
                </Form>
            </CardBody>
        </Card> 
    </Container>
    )
}
export default UpdateBlog;