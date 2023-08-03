import {useState} from "react";

const TextField = ({onChange, type, id, value, name, label, error}) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = ({target}) => {
        onChange({name:[target.name], value:target.value})
    }

    const getInputClasses = () => {
        return 'form-control' + (error ? ' is-invalid' : '');
    }

    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    }

    return (
        <div className='mb-2 p-1 h-[84px]'>
            <label className='flex justify-content-start' htmlFor={name}>{label}</label>
            <div className="input-group has-validation">
                <input type={showPassword ? 'text' : type}
                       id={id}
                       name={name}
                       value={value}
                       onChange={handleChange}
                       className={getInputClasses()}
                />
                {type  === 'password' ?
                    <button className="btn btn-outline-secondary" type="button" onClick={toggleShowPassword}><i
                        className={'bi bi-eye-' + (showPassword ? 'fill' : 'slash')}></i></button>
                    : ''}
                {error && <div className='invalid-feedback'>{error}</div>}
            </div>
        </div>
    );
};

export default TextField;