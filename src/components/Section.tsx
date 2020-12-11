import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/colors';

interface IProps {
    children: JSX.Element;
}

const Section = ({ children }: IProps): JSX.Element => {
    return (
        <SSection>
            {children}
        </SSection>
    );
};

const SSection = styled.div`
    display:flex;
    justify-content:center;
    border-radius: 20px;
    max-width: 800px;
    padding: 15px;
    background-color: ${colors.CustomColor_WhiteIvory};
    margin: 30px auto;
`;

export default Section;