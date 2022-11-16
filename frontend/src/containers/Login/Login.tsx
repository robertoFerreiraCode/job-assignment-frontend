import { SetStateAction, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import Home from "../Home";


const Login = ({setId} : {setId: React.Dispatch<SetStateAction<number>>}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    // use window.sessionStorage to store details
    const sendLoginRequest = async () => {
        const reqBody = {
            username: username,
            password: password
        };
    
        const response = await fetch("http://localhost:8080/signin", {
            headers: {
                "Content-Type": "application/json", 
            }, 
            method: "post",
            body: JSON.stringify(reqBody),
        })
        const data = await response.json();
        setId(data.id);
        navigate("/");
    }

    return (
        <div>
            <label>Username</label>
            <input id="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
            <label>Password</label>
            <input type="password" id="password" value={password} 
            onChange={(e) => setPassword(e.target.value)}></input>
            <button type="button" id="submit" onClick={() => sendLoginRequest()}>Log in</button>
        </div>
    )
}



export default Login;