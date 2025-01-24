import { Card, Container, FormGroup, Input, Label,Form, Button, Row, Col, CardHeader,CardBody } from "reactstrap";
import Base from "../components/Base";
import { useState } from "react";

const Login=()=>{

    const[data,setData]=useState({
        email:'',
        password:''
    })

    const handleEvent=(event)=>{
        console.log(event.target.value)
        setData({
            ...data,
            [event.target.name]:event.target.value
        })
    }

    const submitForm=(event)=>{
        event.preventDefault();
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
                                        <Label for="email">Email</Label>
                                        <Input type="email" placeholder="Enter email" id="email" name="email" value={data.email} onChange={handleEvent}/>
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