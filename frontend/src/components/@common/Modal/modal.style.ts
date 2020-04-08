import styled from 'styled-components';

import { ReactComponent as ModalCloseSvg } from '../../../images/close.svg';

import { COLOR } from '../../../constants/color';

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-color: rgba(0, 0, 0, 0.5);

    display: flex;
    justify-content: center;
    align-items: start;

    padding-top: 1rem;
`;

const ModalLayout = styled.div`
    padding: 1rem;
    margin: 0 0.5rem;
    border-radius: 5px;
    flex: 0 1 540px;

    background-color: #ffffff;
`;

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ModalTitle = styled.div`
    font-size: 1.25rem;
`;

const ModalClose = styled.div``;

const ModalCloseImage = styled(ModalCloseSvg)`
    cursor: pointer;
    
    width: 2rem;
    height: 2rem;
    fill: ${COLOR};
`;

const ModalBody = styled.div``;

export {
    ModalOverlay,
    ModalLayout,
    ModalHeader,
    ModalTitle,
    ModalClose,
    ModalCloseImage,
    ModalBody
}
