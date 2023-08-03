import React, {useEffect, useState} from 'react';
import {validator} from "./validator";
import TextField from "./textField";
import CheckBoxField from "../../../../SpaceCinema/my-app/src/components/authentication/components/checkBoxField";


const LoginForm = () => {
    const [data, setData] = useState({email: "", password: "", stayOn:false});
    const [errors, setErrors] = useState({});

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }


    // const validateScheme = yup.object().shape({
    //     password:yup.string().required('Пароль обязателен для заполнения')
    //         .matches(/^(?=.*[A-Z])/,'Пароль дожен содержать хотя бы одну заглавную букву')
    //         .matches(/(?=.*[0-9])/,'Пароль должен содержать хотя бы одну цифру')
    //         .matches(/(?=.*[!@#&^$%!()*])/, 'Пароль должен содержать один из специальных символов !@#&^$%!()*')
    //         .matches(/(?=.{8,})/,'Пароль должен состоять минимум из 8-ми символов :)' ),
    //     email:yup.string().required('Электоранная почта обязательна для заполнения').email('Email введен некорректно')
    // })


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
        //validateScheme.validate(data).then(() => setErrors({})).catch((error) => setErrors({[error.path]:error.message}) )
        // for (const fieldName in data) {
        //     if (data[fieldName].trim() === '') {
        //         errors[fieldName] = `${fieldName} обязательно для заполнения`
        //     }
        // }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    }
    const isValid = Object.keys(errors).length === 0

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        //console.log(!isValid)
        if (!isValid) return;
        console.log(data);
    }


    return (
        <form onSubmit={handleSubmit}>
            <TextField type="text"
                       label='email'
                       id='email'
                       name='email'
                       value={data.email}
                       error={errors.email}
                       onChange={handleChange}
            />
            <TextField type="password"
                       label='password'
                       id='password'
                       name='password'
                       value={data.password}
                       error={errors.password}
                       onChange={handleChange}
            />
            <CheckBoxField value={data.stayOn} name='stayOn' onChange={handleChange}>Оставаться в системе</CheckBoxField>
            <button className='btn btn-primary w-100 mx-auto' type='submit' disabled={!isValid}>Submit</button>
        </form>
    )
};

export default LoginForm;