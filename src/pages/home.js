import { useContext } from "react";
import Base from "../components/Base";
import userContext from "./context/userContext";
import { CardBody, Container } from "reactstrap";
const HomePage=()=>{
    const object=useContext(userContext)
    return(
        (object) &&(
        <Base>
        {JSON.stringify(object.data)}
            <CardBody>
                <h2>Welcome to Blog Application</h2>
                {/* <h3>Dear {object.user.data.id}</h3> */}
            </CardBody>
        </Base>
        )
    )
}
export default HomePage;