import styled from 'styled-components';

import { COLOR, COLORLIGHT } from '../../../constants/color';

const UserListItemLayout = styled.div`
    display: flex;
    margin: 1rem 0;
    padding: 1rem;

    border-radius: 5px;

    background-color: ${COLORLIGHT};

    white-space: nowrap;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const UserListItemColOne = styled.div`
    flex: 0 0 30%;
`;

const UserListItemColTwo = styled.div`
    flex: 1 1 auto;
`;

const UserListItemColTree = styled.div`
    flex: 0 0 auto;
`;

const UserListItemRow = styled.div`
    padding: 0.5rem;
`;

const UserListItemLabel = styled.span`
    font-size: 0.9rem;
    color: ${COLOR};
`;

export {
    UserListItemLayout,
    UserListItemColOne,
    UserListItemColTwo,
    UserListItemColTree,
    UserListItemRow,
    UserListItemLabel
};
