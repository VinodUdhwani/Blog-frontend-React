import Base from "../components/Base";
import userContext from "./context/userContext";
const HomePage=()=>{
    return(
        <userContext.Consumer>
            {
                (user)=>(
                <Base> 
                    <div>
                        <h1>Welcome {user.name},</h1>
                        <h1>Welcome to our blog application</h1>
                        <h3>this is home page of blog application</h3>
                    </div>
                </Base>
                )
            }
        </userContext.Consumer>
    )
}
export default HomePage;