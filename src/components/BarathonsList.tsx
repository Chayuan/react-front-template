import React, { useState, Component } from 'react';
import { IBarathon, IPub } from '../types/api';
import BarathonElement from './BarathonElement';
import styled from 'styled-components';
import Map from './LeafletMap';
//Permet d'afficher des alerts
interface IProps {
    barathons: IBarathon[]
}



const BarathonsList = ({ barathons }: IProps): JSX.Element => {
    const getCoordGpsFromBarathon = (barathon): void => {
        console.log(barathon);
    };
    getCoordGpsFromBarathon(barathons[0]);
    return (
        <SBarathonsList>
            {barathons.map((barathon: IBarathon) => {
                return (
                    <BarathonElement barathon={barathon} key={barathon._id} />
                );
            })}
        </SBarathonsList>


    );

};
const SBarathonsList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
`;
export default BarathonsList;