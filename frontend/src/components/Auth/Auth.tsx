import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Input from '../@common/Input';
import Button from '../@common/Button';

import { IAuthRootState } from './auth.type'

import { authLoginAction } from './auth.action';

import { AuthLayout, AuthForm, AuthRow, AuthHeader } from './auth.style';

const Auth: FC = () => {
    const dispatch = useDispatch();

    const { user } = useSelector(({ auth }: IAuthRootState) => auth);

    if (user) {
        return <Redirect to="/" />;
    }

    return (
        <AuthLayout>
            <AuthForm>
                <AuthHeader>Вход</AuthHeader>
                    <Formik
                        initialValues = {{
                            email: '',
                            password: ''}}
                        validationSchema = {Yup.object({
                            email: Yup.string().email('Не корректная эл. почта').required('Обязательно'),
                            password: Yup.string().required('Обязательно')
                        })}
                        onSubmit = {({ email }) => {dispatch(authLoginAction({email}))}}>

                    <Form>
                        <AuthRow>
                            <Input
                                label="Эл. почта"
                                name="email"
                                type="text" />
                        </AuthRow>

                        <AuthRow>
                            <Input
                                label="Пароль"
                                name="password"
                                type="password" />
                        </AuthRow>

                        <AuthRow>
                            <Button
                                type="submit"
                                size="large"
                                block>Войти</Button>
                        </AuthRow>
                    </Form>
                </Formik>
            </AuthForm>
        </AuthLayout>
    );
}

export default Auth;
