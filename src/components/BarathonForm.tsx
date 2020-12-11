import React, { useState } from 'react';
import { IPub } from '../types/api';
import Button from './Button';
import Input from './Input';
import Map from './LeafletMap';

interface IProps {
    pubs: IPub[]
}

const BarathonForm = ({ pubs }: IProps): JSX.Element => {
    const [selectedPubs, setSelectedPubs] = useState<IPub[]>([]);

    const handleSubmit = (): void => {

    };

    const removeLastPub = (): void => {
        const pubs = [...selectedPubs];
        pubs.pop();
        setSelectedPubs(pubs);
    };

    const addPub = (id: string): void => {
        const selectedPub = pubs.find((pub: IPub) => {
            if (pub._id === id) return true;
            return false;
        });

        setSelectedPubs([...selectedPubs, selectedPub]);
    };

    const removePub = (id: string): void => {
        setSelectedPubs(selectedPubs.filter((pub: IPub) => {
            if (id === pub._id) return false;
            return true;
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input label='Nom' name="name" type="text" placeholder='Nom de votre parcours' />
            <Input label='Auteur' name="author" type="text" placeholder='Votre pseudo' />
            <Input label='pubs' name="pubs" type="text" value={selectedPubs.map((pub: IPub) => pub._id).join(',')} />
            <Button onClick={removeLastPub} type='button'>Remove last</Button>
            <Map pubs={pubs} addPub={addPub} removePub={removePub} selectedPubs={selectedPubs} />
            <Button type='submit'>Soumettre</Button>
        </form>
    );
};

export default BarathonForm;