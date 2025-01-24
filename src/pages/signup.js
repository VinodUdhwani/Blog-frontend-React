import { Card, Container, Form, FormGroup, Input, Label,Button, Row, CardHeader, CardBody, Col } from "reactstrap";
import Base from "../components/Base";
import { useState } from "react";
const SignUp=()=>{
    
    const[data,setData]=useState({
        name:'',
        email:'',
        password:'',
        about:''
    })

    const handleEvent=(event)=>{
        console.log(event.target.value)
        setData({
            ...data,
            [event.target.name]:event.target.value
        })
    }

    const resetData=()=>{
        setData({
            name:'',
            email:'',
            password:'',
            about:''
        })
    }
    const submitForm=(event)=>{
        event.preventDefault();
    }
    return(
        <Base>
            <Container className="mt-3">
                <Row>
                    <Col sm={{size:6,offset:3}}>
                        <Card color="dark" inverse>
                            <CardHeader className="text-center">
                                <h3>Fill Information to Register !!</h3>
                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={submitForm}>
                                    <FormGroup>
                                        <Label for="name">Name</Label>
                                        <Input type="text" placeholder="Enter name" id="name" name="name" onChange={handleEvent} value={data.name}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input type="email" placeholder="Enter email" id="email" name="email" onChange={handleEvent} value={data.email}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="password">Password</Label>
                                        <Input type="password" placeholder="Enter password" id="password" name="password" onChange={handleEvent} value={data.password}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="about">About</Label>
                                        <Input type="textarea" placeholder="Enter bio" id="about" style={{height:150}} name="about" onChange={handleEvent} value={data.about}/>
                                    </FormGroup>
                                    <Container className="text-center">
                                        <Button outline color="light">Register</Button>
                                        <Button onClick={resetData} type="reset" color="secondary" className="ms-2">Reset</Button>
                                    </Container>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Base>
    )
}
export default SignUp;