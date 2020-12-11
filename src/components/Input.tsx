import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/colors';
import { fonts } from '../styles/fonts';

interface IProps {
    name: string;
    label?: string;
    type: string;
    placeholder?: string;
    value?: string;
}

const Input = ({ name, label, type, placeholder, value }: IProps): JSX.Element => {
    return (
        <SInputContainer>
            {label && <SLabel>{label}</SLabel>}
            <SInput
                name={name}
                type={type}
                placeholder={placeholder}
                withLabel={!!label}
                value={value}
                onChange={(): void => {
                    // stuff
                }}
            />
        </SInputContainer>
    );
};

const INPUT_HEIGHT = 40;

const SInputContainer = styled.div`
    display: flex;
    height: ${INPUT_HEIGHT}px;
    margin-bottom: 15px;
`;

const SLabel = styled.label`
    background: ${colors.CustomColor_PinkRasberry};
    color: rgba(255, 255, 255, 0.8);
    line-height: ${INPUT_HEIGHT}px;
    min-width: 50px;
    text-align: right;
    font-size: 12px;
    padding-right: 15px;
    border-radius: 50px 0 0 50px;
`;

const SInput = styled.input<any>`
    display: block;
    box-sizing: border-box;
    height: ${INPUT_HEIGHT}px;
    min-width:35%;
    padding: px 10px;
    border: none;
    border-radius: ${props => props.withLabel ? '0 50px 50px 0' : '50px'};
    background-color: ${colors.white};
    font-family: ${fonts.text};
    color: ${colors.darkGrey};
    outline: none;
    text-align:center;

    &::placeholder {
        color: ${colors.darkGrey};
        opacity: 0.6;
    }
`;

export default Input;