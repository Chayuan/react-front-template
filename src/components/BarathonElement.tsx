import React, { useState, Component } from 'react';
import { IBarathon, IPub } from '../types/api';
import styled from 'styled-components';
import TextNode from './TextNode';
import Map from './LeafletMapBarathon';
interface IProps {
    barathon: IBarathon[];
}


const BarathonElement = ({ barathon, setSelectedBarathon }: IProps): JSX.Element => {
    return (
        <SMetaBarathon>
            <STextNodeTitle>
                <TextNode text={barathon.name}></TextNode>
            </STextNodeTitle>
            <STextNodeAuthor>
                <TextNode text={'Parcours crée par '+barathon.author}></TextNode>
            </STextNodeAuthor>
        </SMetaBarathon>
    );

};
const SMetaBarathon = styled.div`
    width: 100%;
    margin: 20px 0px;
    display:flex;
    flex-direction: column;
    align-items: center;
`;
const STextNodeTitle = styled.div`
    color:red
`;
const STextNodeAuthor = styled.div`
    color:blue;
    font-size:0.8em;
`;
export default BarathonElement;