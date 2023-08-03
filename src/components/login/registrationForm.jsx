import {useEffect, useState} from "react";
import TextField from "./textField";
import {validator} from "./validator";

const RegisterForm = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        profession: "",
        sex: 'male',
        qualities: [],
        license: false,
    });
    const [professions, setProfessions] = useState({});
    const [errors, setErrors] = useState({});
    const [qualities, setQualities] = useState({});

    // useEffect(() => {
    //     api.professions.fetchAll().then((data) => setProfessions(data));
    //     api.qualities.fetchAll().then((data) => setQualities(data));
    // }, []);


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
                message: 'Пароль дожен содержать хотя бы одну заглавную букву'
            },
            isContainDigit: {
                message: 'Пароль должен содержать хотя бы одну цифру'
            },
            min: {
                message: 'Пароль должен состоять минимум из 8-ми символов :)',
                value: 8
            },
        },
        // profession: {
        //     isRequired: {
        //         message: 'Обязательно выберите вашу профессию'
        //     }
        // },
        license: {
            isRequired: {
                message: 'Вы не можете использовать наш сервис, без подтверждения лицензионного соглашения'
            }
        }
    }


    useEffect(() => {
        validate()
    }, [data]);


    const validate = () => {
        const errors = validator(data, validatorConfig);
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
            <button className='btn btn-primary w-100 mx-auto' type='submit' disabled={!isValid}>Submit</button>
        </form>
    )
};

export default RegisterForm;
