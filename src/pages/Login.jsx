import React from 'react';

import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const handleLogin = async () => {
        navigate('/home');
    }

    document.body.className = 'hold-transition login-page';

    return (
        <>
            <div className="login-box">
                <div className="login-logo">
                    <b>BackOffice</b> for Admin
                </div>
                <div className="login-box-body">
                    <p className="login-box-msg">Login</p>

                    <form onSubmit={handleLogin}>
                        <div className="form-group has-feedback">
                            <label>Username</label>
                            <input type="text" className="form-control" />
                            <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                            <label>Password</label>
                            <input type="password" className="form-control" />
                            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div>
                        <div className="row">
                            <div className="col-xs-4">
                                <button onClick={handleLogin} type="button" className="btn btn-primary btn-block btn-flat">Sign In</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </>
    );
}

export default Login;