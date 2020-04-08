import styled, { css } from 'styled-components';

import { IInputLabelProps } from './input.type';

import { COLORDARK } from '../../../constants/color';

const InputLabel = styled.label<IInputLabelProps>`
    ${({ hasError }) => hasError && css`
        color: #ff0000;
    `}
`;

const InputField = styled.input`
    border: 1px solid ${COLORDARK};
    border-radius: 2.5px;
    color: ${COLORDARK};

    box-sizing: border-box;

    width: 100%;
    padding: 0.5rem;
`;

const InputError = styled.span`
    color: #ff0000;
`;

export {
    InputLabel,
    InputField,
    InputError
};
