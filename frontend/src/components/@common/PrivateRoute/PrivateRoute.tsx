import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { IPrivateRouteProps } from './private-route.type';
import { IAuthRootState } from '../../Auth/auth.type';

const PrivateRoute: FC<IPrivateRouteProps> = ({ children, ...props }) => {
    const { user } = useSelector(({ auth }: IAuthRootState) => auth);

    return (
        <Route
            {...props}
            render={() =>
                user
                    ? children
                    : <Redirect to="/auth" />} />
    );
};

export default PrivateRoute;
