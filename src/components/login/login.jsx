import RegisterForm from "./registrationForm";
import LoginForm from "./loginForm";
import {useState} from "react";
import {useParams} from "react-router-dom";
import styles from './Login.module.css';

const Login = () => {
    const {type} = useParams();
    const [formType, setFormType] = useState(type === 'register' ? type : 'login');

    const toggleFormType = () => {
        setFormType((prevState) => prevState === 'register' ? 'login' : 'register')
    }

    return (
        <div className={styles.login_container}>
            <div className={styles.login_container_row}>
                <div className={styles.overlay}/>
                <div className={styles.login_action}>
                    {formType === 'register' ?
                        <> <h3 className='text-2xl mt-3'>Регистрация</h3> <RegisterForm/> <p className='mt-3'>Уже есть аккаунт? <button className='btn btn-danger btn-sm' onClick={toggleFormType}>Sign
                            In</button></p></>
                        :
                        <> <h3 className='text-2xl mt-3'>Авторизация</h3> <LoginForm/> <p className='mt-3'>Нет аккаунта? <button  className='btn btn-danger btn-sm' onClick={toggleFormType}>Sign
                            Up</button></p></>
                    }
                </div>
            </div>
        </div>
    )
};

export default Login;