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

    const { user, loading, error } = useSelector(({ auth }: IAuthRootState) => auth);

    if (user) {
        return <Redirect to="/" />;
    }

    return (
        <AuthLayout>
            <AuthForm>
                <AuthHeader>Вход</AuthHeader>
                    <Formik
                        initialValues = {{
                            username: '',
                            password: ''}}
                        validationSchema = {Yup.object({
                            username: Yup.string().email('Не корректная эл. почта').required('Обязательно'),
                            password: Yup.string().required('Обязательно')
                        })}
                        onSubmit = {(auth) => {dispatch(authLoginAction(auth))}}>

                    <Form>
                        <AuthRow>
                            <Input
                                label="Эл. почта"
                                name="username"
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
                                loading={loading}
                                error={error}
                                block>Войти</Button>
                        </AuthRow>
                    </Form>
                </Formik>
            </AuthForm>
        </AuthLayout>
    );
}

export default Auth;
