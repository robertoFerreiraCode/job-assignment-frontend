import { SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledForm } from "../../styles/Form.styled";


const Login = ({setId} : {setId: React.Dispatch<SetStateAction<number>>}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

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
        sessionStorage.setItem("id", data.id);
        setId(data.id);
        navigate("/");
    }

    return (
        <StyledForm>
            <div className="container">
                <h2>Login</h2>
                <div className="form-group">
                    <label>Username</label>
                    <input id="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" id="password" value={password} 
                onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <button type="button" id="submit" onClick={() => sendLoginRequest()}>Submit</button>
            </div>
        </StyledForm>
    )
}



export default Login;