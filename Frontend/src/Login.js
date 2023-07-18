import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Link, useHistory, useNavigate } from 'react-router-dom';

const Login = () => {
    const [state, setState] = useState({
        email: '',
        password: ''
    })
    const [err, setErr] = useState({})


    const navigate = useNavigate();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setState((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    function Validation() {
        const err = {}

        if (!state.email) {
            err.email = 'Email is Required';
        } else if (/\$+@/.test(state.email)) {
            err.email = 'email is required format '
        }
        if (!state.password) {
            err.password = 'enter the name'
        } else if (state.password < 5) {
            err.password = 'more than 5 character required'
        }
        return err

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = Validation();
        setErr(errors);

        if (Object.keys(errors).length === 0) {
            console.log('Form submitted');

            navigate('/home');
        }


    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-6">
                    <h1 className="mb-6 text-center">DigitalFlake</h1>
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label>Email:</label>
                            <input type="text" class="form-control" onChange={handleChange}
                                name='name' value={state.email} placeholder="Enter your name" />
                            {err.email && <span style={{ color: "red" }}>{err.email}</span>}
                        </div>

                        <div class="form-group">
                            <label >Password:</label>
                            <input type="email" class="form-control" onChange={handleChange}
                                name='email' value={state.password} placeholder="Enter your email" />
                            {err.password && <span style={{ color: "red" }}>{err.password}</span>}
                        </div>
                        <br></br>
                        <button type="submit" class="btn btn-primary">LOGIN</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
