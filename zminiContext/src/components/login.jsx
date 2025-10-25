import React, {useState, useContext, useActionState} from "react";
import UserContext from "../context/UserContext";

function Login () {

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username, password})
    }
    return(
        <div>
            <h2>Login</h2>
            <input type="text"
            value={username}  // like in the inpot box it should accept and show the usernmae 
            onChange={(e)=> setUserName(e.target.value)}  //When someone click the username box an event shold run to set a new Username
             placeholder="Username"/>
             {"  "}
            <input type="text"
            value={password}  // like in the inpot box it should accept and show the password
            onChange={(e)=> setPassword(e.target.value)} //When someone click the password box an event shold run to set a new Password
            placeholder="Password"/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}


export default Login