import React, { useEffect, useState } from "react";
import instance from "../API";
import { useNavigate } from "react-router-dom";
import { wait } from "@testing-library/user-event/dist/utils";

function Login(props) {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const { email, setEmail, setUserType } = props;
    const [isWrongCredentials, setIsWrongCredentials] = useState(false);
    const [waiting, setWaiting] = useState(false);
    const [message, setMessage] = useState('');
    async function handleLogin(event) {
        event.preventDefault();
        setWaiting(true);
        await instance
            .post("/login", { email, password })
            .then((res) => {
                console.log(res.data);
                if (res.data.success) {
                    setIsWrongCredentials(false);

                    console.log("response from server", res);
                    console.log("user type", res.data.userType);
                    setUserType(res.data.userType);
                    localStorage.setItem("userType", res.data.userType);
                    navigate("/");
                } if (!res.data.success) {
                    setMessage(res.data.message)
                    setIsWrongCredentials(true);
                }
                setWaiting(false);
            })
            .catch((error) => {
                console.log("error from server", error);
                if (error.code === "ERR_BAD_REQUEST") {
                    setIsWrongCredentials(true);
                }
                setWaiting(false);
            });
    }
    function navigateToSignup() {
        navigate("/signup");
    }
    function navigateToCreate() {
        navigate('/create')
    }

    useEffect(() => {
        if (waiting == true) {
            console.log('Waiting for a response');;
        }
    }, [waiting, message])

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                {waiting && (<p style={{ color: "black" }}> Waiting for response</p>)}
                {isWrongCredentials && (
                    <p style={{ color: "red" }}>Please Enter the right credentials!! {message}</p>
                )}
                <p>
                    No account?
                    <button onClick={navigateToSignup}>Sign up</button>
                </p>
                <p>new system Admin
                    <button onClick={navigateToCreate}>Create System Admin</button>
                </p>
            </form>
        </div>
    );
}

export default Login;
// useEffect(() => {

//     const getExpenses = async () => {
//         await axios.get('http://localhost:8080/login').then((res) => {
//             console.log('res...', res);
//         }).catch(err => {
//             console.log('err', err);
//         })
//     }

//     getExpenses();

// }, [])
