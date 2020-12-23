import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../styles/colors';
import { IBarathon, IPub } from '../types/api';
import BarathonForm from './BarathonForm';
import BarathonsList from './BarathonsList';
import Section from './Section';

const App = (): JSX.Element => {
    // Déclaration d'une nouvelle variable d'état interne : pubs
    // RAPPEL: un changement d'état du composant provoque
    //         son re-rendu
    const [pubs, setPubs] = useState<IPub[]>([]);
    const [barathons, setBarathons] = useState<IBarathon[]>([]);

    // fonction executé au montage du composant
    // dans le DOM
    useEffect(() => {
        // obligé d'utiliser une fonction passe-plat pour le code asynchrone
        const fetchPubs = async (): Promise<void> => {
            const response = await fetch('https://miw-server.herokuapp.com/pubs');
            const pubs = await response.json();
            setPubs(pubs);
        };
        fetchPubs();
        const fetchBarathons = async (): Promise<void> => {
            const response = await fetch('https://miw-server.herokuapp.com/barathons');
            const barathons = await response.json();
            setBarathons(barathons);
        };
        fetchBarathons();
    }, []);

    return (
        <SContainer>
            <h3>Ajouter un barathon</h3>
            <Section>
                <BarathonForm pubs={pubs} />
            </Section>
            <h3>Les parcours barathons</h3>
            <Section>      
                <BarathonsList barathons={barathons} pubs={pubs}/>
            </Section>
        </SContainer>
    );
};
const SContainer = styled.div`
    background-color: ${colors.white};
    height: 100%;
    width: 100%;
    padding: 15px;
`;
const SPubsContainer = styled.div`
    display: flex; 
`;

export default App;