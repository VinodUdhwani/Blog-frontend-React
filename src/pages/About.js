import Base from "../components/Base";
import userContext from "./context/userContext";
const About=()=>{
    return(
    <userContext.Consumer>
        {
            (user)=>(
            <Base>
                <h1>Welcome to blog application</h1>
                <h1>this is about page of blog application</h1>
                <h3>Welcome User:{user.name}</h3>
            </Base>
            )
        }
    </userContext.Consumer>
    )
}
export default About;