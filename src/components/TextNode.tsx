import React, { useState, Component } from 'react';
import { IBarathon, IPub } from '../types/api';
import styled from 'styled-components';
import Map from './LeafletMap';

interface IProps {
    text: string
}


const TextNode = ({ text }: IProps): JSX.Element => {
    return (
        <>
        <span>{text}</span>
        </>
    );

};
export default TextNode;