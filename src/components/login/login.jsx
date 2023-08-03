import RegisterForm from "./registrationForm";
import LoginForm from "./loginForm";
import {useState} from "react";
import {useParams} from "react-router-dom";

const Login = () => {
    const {type} = useParams();
    const [formType, setFormType] = useState(type === 'register' ? type : 'login');

    const toggleFormType = () => {
        setFormType((prevState) => prevState === 'register' ? 'login' : 'register')
    }

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 p-4 shadow'>
                    {formType === 'register' ?
                        <> <h3 className='mb-4'>Register</h3> <RegisterForm/> <p className='mt-3'>Already have an account? <button className='btn btn-danger btn-sm' onClick={toggleFormType}>Sign
                            In</button></p></>
                        :
                        <> <h3 className='mb-4'>Login</h3> <LoginForm/> <p className='mt-3'> Don't have an account? <button  className='btn btn-danger btn-sm' onClick={toggleFormType}>Sign
                            Up</button></p></>
                    }
                </div>
            </div>
        </div>
    )
};

export default Login;