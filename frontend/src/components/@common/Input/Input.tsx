import React from 'react';
import { useField } from 'formik';

import { IInputProps } from './input.type';

import { InputLabel, InputField, InputError } from './input.style';

const Input = ({ label, ...props }: IInputProps) => {

    const [field, meta] = useField(props);

    const hasError = Boolean(meta.touched && meta.error);

    return (
        <>
            <InputLabel htmlFor={props.name} hasError={hasError}>{label}</InputLabel>

            <InputField {...field} {...props} />

            {hasError ? (
                <InputError>{meta.error}</InputError>
            ) : null}
        </>
    );
};

export default Input;
