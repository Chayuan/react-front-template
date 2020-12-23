import React, { useState, Component } from 'react';
import { IBarathon, IPub } from '../types/api';
import BarathonElement from './BarathonElement';
import styled from 'styled-components';
import Map from './LeafletMapBarathon';
//Permet d'afficher des alerts
interface IPropsBarathonList {
    barathons: IBarathon[];
    pubs: IPub[];
}

const BarathonsList = ({ barathons, pubs }: IPropsBarathonList): JSX.Element => {
    //const selectedPubs: IPub[] = selectedBarathon != null ? selectedBarathon.checkpoints.map(c => { return pubs.find(p => p._id == c);}) : [];
    const [selectedBarathon, setSelectedBarathon] = useState<IBarathon>(null);

    const selectBarathon = (pub: IBarathon): void => {
        setSelectedBarathon(pub);
    };

    const selectedPubs: IPub[] = selectedBarathon != null ? selectedBarathon.checkpoints.map(c => { return pubs.find(p => p._id == c); }) : [];

    return (
        <SBarathonsList>
            {
                barathons.map((barathon) => {
                    console.log(barathon)
                    return (
                        <>
                            <BarathonElement key={barathon._id} setSelectedBarathon={selectBarathon} barathon={barathon} pubs={pubs} />
                            <Map
                                pubs={pubs}
                                selectedPubs={selectedPubs}
                            />
                        </>
                    );
                })
            }
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