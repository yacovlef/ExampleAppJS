import React, { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { IPrivateRouteProps } from './private-route.type';

const PrivateRoute: FC<IPrivateRouteProps> = ({ children, ...props }) => {
    return (
        <Route
            {...props}
            render={() =>
                localStorage.getItem('token')
                    ? children
                    : <Redirect to="/auth" />} />
    );
};

export default PrivateRoute;
