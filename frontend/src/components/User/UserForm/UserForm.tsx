import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { UserFormRow } from './user-form.style';

import Input from '../../@common/Input';
import Button from '../../@common/Button';

import { IUserFormUser, IUserFormProps, IUserFormRootState } from './user-form.type';

const UserForm: FC<IUserFormProps> = ({ submitUserFormAction, user }) => {

    const { loading, error } = useSelector(({ userForm }: IUserFormRootState) => userForm);

    const dispatch = useDispatch();

    const values = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''};

    const initialValues: IUserFormUser = user || values;

    return (
        <Formik
            initialValues = {initialValues}
            validationSchema = {Yup.object({
                firstName: Yup.string().required('Обязательно'),
                lastName: Yup.string().required('Обязательно'),
                email: Yup.string().email('Не корректная эл. почта').required('Обязательно')})}
            onSubmit = {(user) => {dispatch(submitUserFormAction(user))}}>

            <Form>
                <UserFormRow>
                    <Input
                        label="Имя"
                        name="firstName"
                        type="text"
                    />
                </UserFormRow>

                <UserFormRow>
                    <Input
                        label="Фамилия"
                        name="lastName"
                        type="text"
                    />
                </UserFormRow>

                <UserFormRow>
                    <Input
                        label="Эл. почта"
                        name="email"
                        type="text"
                    />
                </UserFormRow>

                <UserFormRow>
                    <Input
                        label="Пароль"
                        name="password"
                        type="password"
                    />
                </UserFormRow>

                <UserFormRow>
                    <Button
                        type="submit"
                        size="large"
                        loading={loading}
                        error={error}
                        block>Сохранить</Button>
                </UserFormRow>
            </Form>
        </Formik>
    );
};

export default UserForm;
