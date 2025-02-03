import { Card, Container, Form, FormGroup, Input, Label,Button, Row, CardHeader, CardBody, Col, FormFeedback } from "reactstrap";
import Base from "../components/Base";
import { cache, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../services/helper";
import {register} from "../services/user-service";
import { toast } from "react-toastify";
const SignUp=()=>{
    
    const[data,setData]=useState({
        name:'',
        email:'',
        password:'',
        about:''
    })

    const [error,setError]=useState({
        errors:{},
        isError:false
    })

    const handleEvent=(event)=>{
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

        // if(error.isError){
        //     toast.error("form data is not valid")
        //     return;
        // }

        register(data).then((response)=>{
            console.log(response)
            console.log("success log")
            toast.success("user is registerd successfully")
            setData({
                name:'',
                email:'',
                password:'',
                about:''
            })
        }).catch((error)=>{
            console.log(error)
            console.log("error log")
            setError({
                errors:error,
                isError:true
            })
        });

        // try{
        //     const response=axios.post(`${BASE_URL}/blog/secure/register`,data)
        // }catch(error){
        //     console.log(error)
        // }
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
                                        <Input type="text" placeholder="Enter name" id="name" name="name" onChange={handleEvent} value={data.name}  invalid={  error.errors?.response?.data?.name ? true : false  }/>
                                        <FormFeedback>
                                            {error.errors?.response?.data?.name}    
                                        </FormFeedback>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input type="email" placeholder="Enter email" id="email" name="email" onChange={handleEvent} value={data.email} invalid={ error.errors?.response?.data?.email?true:false}/>
                                        <FormFeedback>
                                            {error.errors?.response?.data?.email}
                                        </FormFeedback>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="password">Password</Label>
                                        <Input type="password" placeholder="Enter password" id="password" name="password" onChange={handleEvent} value={data.password} invalid={ error.errors?.response?.data?.password ? true : false }/>
                                        <FormFeedback>
                                            {error.errors?.response?.data?.password}
                                        </FormFeedback>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="about">About</Label>
                                        <Input type="textarea" placeholder="Enter bio" id="about" style={{height:150}} name="about" onChange={handleEvent} value={data.about} invalid={error.errors?.response?.data?.about?true:false}/>
                                        <FormFeedback>
                                            {error.errors?.response?.data?.about}
                                        </FormFeedback>
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