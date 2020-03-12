import styled, { css } from 'styled-components';

import { IInputLabelProps } from './input.type';

import { GRAYDARK } from '../../../constants/color';

const InputLabel = styled.label<IInputLabelProps>`
    font-size: 1.25rem;

    ${({ hasError }) => hasError && css`
        color: #ff0000;
    `}
`;

const InputField = styled.input`
    border: 1px solid ${GRAYDARK};
    border-radius: 2.5px;
    color: ${GRAYDARK};

    box-sizing: border-box;

    width: 100%;
    padding: 0.5rem;
    font-size: 1.25rem;
`;

const InputError = styled.span`
    color: #ff0000;
`;

export {
    InputLabel,
    InputField,
    InputError
};
