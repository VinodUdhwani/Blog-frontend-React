import { Card, Container, FormGroup, Input, Label,Form, Button, Row, Col, CardHeader,CardBody, Toast } from "reactstrap";
import Base from "../components/Base";
import { useState } from "react";
import { signIn } from "../services/user-service";
import {toast} from 'react-toastify'
import { doLogin } from "../auth/auth";
import { Navigate, useNavigate } from "react-router-dom";
const Login=()=>{

    const navigate=useNavigate();

    const[data,setData]=useState({
        username:'',
        password:''
    })

    const handleEvent=(event)=>{
        setData({
            ...data,
            [event.target.name]:event.target.value
        })
    }

    const submitForm=(event)=>{
        event.preventDefault();

        if(data.username.trim()=='' || data.password.trim()==''){
            toast.error("username or password cannot be empty")
            return
        }
        signIn(data).then((response)=>{
            console.log(response)
            doLogin(response,()=>{
                console.log("login details saved in local storage")
                //redirect to dashboard page 

                navigate('/user/dashboard')
            })
            toast.success("Login success")
        }).catch((error)=>{
            if(error.response.status==400){
                toast.error(error.response.data)
            }else{
                toast.error("something went wrong on server")
            }
            console.log(error)
        })
    }

    return(
        <Base>
            <Container className="mt-5">
                <Row>
                    <Col sm={{size:6,offset:3}}>
                        <Card color="dark" inverse>
                            <CardHeader className="text-center">
                                <h3>Login Here </h3>
                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={submitForm}>
                                    <FormGroup>
                                        <Label for="username">Username</Label>
                                        <Input type="email" placeholder="Enter email" id="username" name="username" value={data.username} onChange={handleEvent}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="password">Password</Label>
                                        <Input type="password" placeholder="Enter password" id="password" name="password" value={data.password} onChange={handleEvent}/>
                                    </FormGroup>
                                    <Container className="text-center">
                                        <Button color="light" outline>Login</Button>
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
export default Login;