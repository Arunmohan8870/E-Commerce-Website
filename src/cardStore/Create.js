
import React, { useState } from 'react'
export default function Login() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [number, setNumber] = useState("")
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
        } else if (number.length < 10) {
            alert("Number must be 10 characters");
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

                        <h4>Create Account</h4>


                        <input
                            type="text"
                            placeholder='Name....'
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder='Mobile Number....'
                            onChange={(e) => setNumber(e.target.value)}
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
                            placeholder=' OTP'
                        />
                        <button className='btn btn-warning' onClick={() => Submit()}> Create </button>
                    </div>

                </div>
            </div>
        </form>

    )

}


