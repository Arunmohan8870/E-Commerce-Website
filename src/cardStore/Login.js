
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navitive = useNavigate();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const Submit = (e) => {
         
        if (name == 0) {
            alert("Name can't be blank");
            return false;
        } else if (email == 0) {
            alert("email can't be blank");
            return false;
        } else if (password == 0) {
            alert("Password can't be blank");
            return false;
        } else if (password.length < 6) {
            alert("Password must be 8 characters");
            return false;
        } else {
            alert(`                          Account Created 
                          Happy Shoping🤍💚`)
        }


    }

    return (


        <form action="#">
            <div className='detail mt-5'>
                <div className='details-5'>

                    <div className='details-4'>

                        <h2>Login</h2>


                        <input
                            type="text"
                            placeholder='User...'
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder='E-mail....'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder='Password....'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder='Re-Password....'
                        />
                        <a className='create' href="#" onClick={() => navitive('/Create')}>Create a account</a><br></br>

                        <button className='btn btn-warning' onClick={() => Submit()}>Submit</button>
                    </div>

                </div>
            </div>
        </form>

    )
}

