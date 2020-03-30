import styled from 'styled-components';

const AuthLayout = styled.div`
    display: flex;
    justify-content: center;
`;

const AuthForm = styled.div`
    padding: 1rem;
    margin: 0 0.5rem;
    border-radius: 5px;
    flex: 0 1 400px;
`;

const AuthRow = styled.div`
    padding: 0.5rem 0;
`;

const AuthHeader = styled(AuthRow)`
    font-size: 2rem;
    text-align: center;
`;

const AuthUnauthorized = styled(AuthRow)`
    text-align: center;
`;

export {
    AuthLayout,
    AuthForm,
    AuthRow,
    AuthHeader,
    AuthUnauthorized
};
