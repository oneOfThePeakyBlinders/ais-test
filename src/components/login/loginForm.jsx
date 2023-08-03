import React, {useEffect, useState} from 'react';
import {validator} from "./validator";
import TextField from "./textField";
import styles from './Login.module.css';
import {Link} from "react-router-dom";

const LoginForm = () => {
    const [data, setData] = useState({email: "", password: "", stayOn:false});
    const [errors, setErrors] = useState({});

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }

    const validatorConfig = {
        email: {
            isRequired: {
                message: 'Электоранная почта обязательна для заполнения'
            },
            isEmail: {
                message: 'Email введен некорректно'
            }
        },
        password: {
            isRequired: {
                message: 'Пароль обязателен для заполнения'
            },
            isCapital: {
                message: 'Пароль дожен содержать хотя бы одну англ. заглавную букву'
            },
            isContainDigit: {
                message: 'Пароль должен содержать хотя бы одну цифру'
            },
            min: {
                message: 'Пароль должен состоять минимум из 8-ми символов :)',
                value: 8
            }
        }
    }

    useEffect(() => {
        validate()
    }, [data]);

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    }
    const isValid = Object.keys(errors).length === 0

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(data);
    }


    return (
        <form className={styles.form_input} onSubmit={handleSubmit}>
            <TextField type="text"
                       label='Логин'
                       id='email'
                       name='email'
                       value={data.email}
                       error={errors.email}
                       onChange={handleChange}
            />
            <TextField type="password"
                       label='Пароль'
                       id='password'
                       name='password'
                       value={data.password}
                       error={errors.password}
                       onChange={handleChange}
            />
            <Link to={'/main'}>
                <button className={styles.submitBtn} type='submit' disabled={!isValid}>Войти</button>
            </Link>
        </form>
    )
};

export default LoginForm;