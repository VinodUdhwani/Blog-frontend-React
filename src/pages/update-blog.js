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
    const[Post,setPost]=useState(null)

    useEffect(()=>{
        loadCategories().then(data=>{
            setCategories(data)
        }).catch(error=>{
            console.log(error)
        })

        loadPostById(blogId).then(data=>{
            setPost(data)
        }).catch((error)=>{
            console.log(error)
        })
    },[,blogId])

    const handleEvent=(event)=>{
        setPost({
            ...Post,
            [event.target.name]:event.target.value
        })
    }
    const handleContent=(event)=>{
        setPost({
            ...Post,
            "content":event
        })
    }

    const updation=(event)=>{
        event.preventDefault()

        Post && (
            updatePost(Post.postId,Post).then(data=>{
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
            {/* {JSON.stringify(Post)} */}
            <CardHeader className="text-center">
                <h2>Update Your Blog Here !</h2>
            </CardHeader>
            <CardBody>
                <Form onSubmit={updation}>
                    <FormGroup>
                        <Label for="title">Post Title</Label>
                        <Input type="text" placeholder="Enter post title here" id="title" name="postTitle" onChange={handleEvent} value={Post?.postTitle}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="content">Post Content</Label>
                        {/* <Input type="textarea" placeholder="Write here" id="content"></Input> */}

                        <JoditEditor
                            ref={editor}
                            value={Post?.content}
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
                        <Input type="select" placeholder="Enter post title here" id="title" value={Post?.categoryDto.categoryTitle} name="categoryId" onChange={handleEvent}>
                        
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