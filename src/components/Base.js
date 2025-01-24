import CustomNavbar from './CustomNavbar'
const Base=({title="Welcome to blog application",children})=>{
    return(
        <div>
            <CustomNavbar/>
            {children}
        </div>
    )
}
export default Base;