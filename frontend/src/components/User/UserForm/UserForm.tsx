import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { UserFormRow } from './user-form.style';

import Input from '../../@common/Input';
import Button from '../../@common/Button';

import { IUserFormProps } from './user-form.type';
import { IUserLIstItem } from '../UserListItem/user-list-item.type';

const UserForm: FC<IUserFormProps> = ({ submitUserFormAction }) => {

    const dispatch = useDispatch();

    return (
        <Formik
            initialValues = {{
                firstName: '',
                lastName: '',
                email: '',
                password: ''} as IUserLIstItem}
            validationSchema = {Yup.object({
                firstName: Yup.string().required('Обязательно'),
                lastName: Yup.string().required('Обязательно'),
                email: Yup.string().email('Не корректная эл. почта').required('Обязательно')})}
            onSubmit = {(data) => {dispatch(submitUserFormAction(data))}}>

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
                        type="text"
                    />
                </UserFormRow>

                <UserFormRow>
                    <Button
                        type="submit"
                        size="large"
                        block>Сохранить</Button>
                </UserFormRow>
            </Form>
        </Formik>
    );
};

export default UserForm;
