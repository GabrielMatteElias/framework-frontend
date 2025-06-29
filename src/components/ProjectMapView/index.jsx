// Crie um componente MapComponent.jsx
'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import styles from './index.module.css';

import 'leaflet/dist/leaflet.css'
delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
    iconUrl: '/pin_map.webp',
    iconSize: [40, 40],      // tamanho do ícone
    iconAnchor: [16, 32],    // onde o ponto "real" está no ícone
    popupAnchor: [0, -32],   // onde a popup vai aparecer
})

export function MapComponent({ lat, lng, name }) {

    return (
        <MapContainer
            center={[lat, lng]}
            zoom={17}
            className={styles.map}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[lat, lng]}>
                <Popup>
                    {name || "Project localization"}
                </Popup>
            </Marker>
        </MapContainer>
    );
}