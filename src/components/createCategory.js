import React, { useState } from 'react'
import { Col, Row,Card, CardHeader, Input, Form, FormGroup,Label,Button, CardBody, Container} from 'reactstrap'
import { createCategory } from '../services/category-service'
import { toast } from 'react-toastify'
import Base from './Base'

export const CreateCategory = () => {

    const[category,setCategory]=useState({
        categoryTitle:'',
        categoryDescription:''
    })
    const handleEvent=(event)=>{
        // console.log(event.target.value)
        setCategory({
            ...category,
            [event.target.name]:event.target.value
        })
    }
    const submitCategory=(event)=>{
        event.preventDefault()

        if(category.categoryTitle.trim()==='' || category.categoryDescription.trim()===''){
            toast.error('category data cannot be empty')
            return
        }

        createCategory(category).then(data=>{
            console.log(data)
            toast.success('catgeory created successfully')
        }).catch(error=>{
            console.log(error)
            toast.error('something went wrong.')
        })
    }
  return (
    <Base>
        <Row>
            <Col className='mt-5' md={{
                size:6,
                offset:3
            }}>
                <Card>
                    <CardHeader className='text-center'>
                        <h4>Create new category for your blog</h4>
                    </CardHeader>
                    <CardBody>
                        <Form onSubmit={submitCategory}>
                            <FormGroup>
                                <Label for='title'>Category Title</Label>
                                <Input 
                                    type='text' 
                                    placeholder='Enter title here' 
                                    id='title' 
                                    onChange={handleEvent} 
                                    name='categoryTitle' 
                                    value={category.categoryTitle}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for='desc'>Category Description</Label>
                                <Input 
                                    type='text' 
                                    placeholder='Enter description about category' 
                                    id='desc' 
                                    onChange={handleEvent} 
                                    name='categoryDescription' 
                                    value={category.categoryDescription}
                                />
                            </FormGroup>
                            <Container className='text-center'>
                                <Button color="primary">Create Category</Button>
                            </Container>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Base>
  )
}
