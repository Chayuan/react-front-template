import React, { useState } from 'react';
import { IPub } from '../types/api';
import Button from './Button';
import Input from './Input';
import Map from './LeafletMap';

interface IProps {
    pubs: IPub[]
}

const BarathonForm = ({ pubs }: IProps): JSX.Element => {
    const [selectedPubs, setSelectedPubs] = useState<string>('');

    const handleSubmit = (): void => {

    };

    const addPub = (id: string): void => {
        setSelectedPubs(`${selectedPubs}${selectedPubs.length ? ',' : ''}${id}`);
    };

    const removePub = (id: string): void => {
        const splittedPubs = selectedPubs.split(',');

        const filteredPubs = splittedPubs.filter((pubId: string) => {
            if (id === pubId) return false;
            return true;
        });

        setSelectedPubs(filteredPubs.join(','));
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input label='Nom' name="name" type="text" placeholder='Nom de votre parcours' />
            <Input label='Auteur' name="author" type="text" placeholder='Votre pseudo' />
            <Input label='pubs' name="pubs" type="text" value={selectedPubs} />
            <Map pubs={pubs} addPub={addPub} removePub={removePub} />
            <Button type='submit'>Soumettre</Button>
        </form>
    );
};

export default BarathonForm;