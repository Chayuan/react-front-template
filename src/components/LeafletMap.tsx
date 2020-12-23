import React from 'react';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { IPub } from '../types/api';
import PubThumbnail from './PubThumbnail';
import { colors } from '../styles/colors';

const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

interface IProps {
    pubs: IPub[];
    selectedPubs: IPub[];
    addPub?: (id: string) => void;
    removePub?: (id: string) => void;
}

const LeafletMap = ({ pubs, addPub, removePub, selectedPubs }: IProps): JSX.Element => {
    const polylineArray: LatLngExpression[] = selectedPubs.map((pub: IPub) => {
        //console.log(pub);
        return [pub.latlng.lat, pub.latlng.lng];
    });

    return (
        <SMapContainer>
            <MapContainer
                center={[44.5667, 6.0833]}
                zoom={14}
                style={{
                    width: 700,
                    height: 500
                }}
            >
                <TileLayer
                    attribution={ATTRIBUTION}
                    url={TILE_LAYER}
                />
                {pubs.map((pub: IPub) => {
                    return (
                        <Marker position={[pub.latlng.lat, pub.latlng.lng]} key={pub._id}>
                            <Popup>
                                <PubThumbnail
                                    pub={pub}
                                    addPub={addPub}
                                    removePub={removePub}
                                />
                            </Popup>
                        </Marker>
                    );
                })}
                <Polyline pathOptions={{ color: colors.vibrant }} positions={polylineArray} />
            </MapContainer>
        </SMapContainer>
    );
};

const SMapContainer = styled.div`
    margin: 15px 0;
`;

export default LeafletMap;