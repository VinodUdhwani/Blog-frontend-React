import React, { useContext, useEffect, useState } from 'react'
import userContext from './context/userContext'
import { Card, CardBody,Col, Container, Row, Table } from 'reactstrap'
import { Link, useParams } from 'react-router-dom'
import {getUser} from '../services/user-service'
function Profile() {

  const object=useContext(userContext)
  const {userId}=useParams()
  const[user,setUser]=useState(undefined)

  useEffect(()=>{
    getUser(userId).then(data=>{
      console.log(data)
      setUser(data)
    }).catch(error=>{
      console.log(error)
    })
  },[])

  const viewInfo=()=>{
    return (
      <Row className='mt-5'>
        
        <Col md={{
          size:6,
          offset:3
        }}>
          <Link style={{textDecoration:0}} to={'/user/dashboard'}>dashboard</Link>
          <Card className='text-center'>
            <h3 className='text-uppercase'>User Information</h3>
            <CardBody>
              <Container>
                <img src='https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE=' alt='user profile picture' style={{maxWidth:200}}/>
              </Container>
              <Table striped bordered={true} hover={true} className='text-center'>
                <tbody>
                  <tr>
                    <td>
                    UserId
                    </td>
                    <td>
                    BLOGUSER{user.id}
                    </td>
                  </tr>
                  <tr>
                    <td>
                    Name
                    </td>
                    <td>
                    {user.name}
                    </td>
                  </tr>
                  <tr>
                    <td>
                    Email
                    </td>
                    <td>
                    {user.email}
                    </td>
                  </tr>
                  <tr>
                    <td>
                    About
                    </td>
                    <td>
                    {user.about}
                    </td>
                  </tr>
                  <tr>
                    <td>
                    Roles
                    </td>
                    <td>
                    {
                      user.roles.map(role=>{
                        return <div key={role.id}>
                          {role.name}
                        </div>
                      })
                    }
                    </td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
  return (
    <div>
        {/* {JSON.stringify(object)} */}
        {
          user ? 
          viewInfo()
          :
          'Loading user data...'
        }
    </div>
  )
}

export default Profile;