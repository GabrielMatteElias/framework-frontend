'use client'

// Icon config
import 'leaflet/dist/leaflet.css';

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { useEffect, useRef } from 'react';
import styles from './index.module.css';


const customIcon = new L.Icon({
    iconUrl: '/pin_map.webp',
    iconSize: [40, 40],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});


function ResetMapView({ coords }) {
    const map = useMap();

    useEffect(() => {
        if (coords) {
            map.setView(coords, map.getZoom());
        }
    }, [coords, map]);

    return null;
}

export function MapComponent({ lat, lng, name }) {
    const mapRef = useRef(null);
    const initialPosition = [lat, lng];

    const resetMapView = () => {
        if (mapRef.current) {
            mapRef.current.setView(initialPosition, 17);
        }
    };

    return (
        <div className={styles.mapWrapper}>
            <MapContainer
                center={initialPosition}
                zoom={17}
                className={styles.map}
                ref={mapRef}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={initialPosition} icon={customIcon}>
                    <Popup className={styles.project_name}>
                        {name || "Localização do Projeto"}
                    </Popup>
                </Marker>
                <ResetMapView coords={initialPosition} />
            </MapContainer>

            <div className={styles.mapControls}>
                <button
                    onClick={resetMapView}
                    className={styles.resetButton}
                    aria-label="Voltar ao ponto inicial"
                    title="Voltar ao ponto inicial"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-locate-fixed-icon lucide-locate-fixed"><line x1="2" x2="5" y1="12" y2="12" /><line x1="19" x2="22" y1="12" y2="12" /><line x1="12" x2="12" y1="2" y2="5" /><line x1="12" x2="12" y1="19" y2="22" /><circle cx="12" cy="12" r="7" /><circle cx="12" cy="12" r="3" /></svg>

                </button>
            </div>
        </div>
    );
}