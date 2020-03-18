import React, { FC } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import { AuthLayout, AuthForm, AuthRow, AuthHeader } from './auth.style';

import Input from '../@common/Input';
import Button from '../@common/Button';

const Auth: FC = () => {
    const history = useHistory();

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
                        onSubmit = {() => {
                            localStorage.setItem('token', '1');
                            history.push('/');
                        }}>

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
