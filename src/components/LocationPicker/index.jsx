'use client';
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import styles from './index.module.css';

// Corrige ícone padrão do Leaflet no React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
});

export default function LocationPicker({ form, setForm }) {
    const [openMap, setOpenMap] = useState(false);
    const [loading, setLoading] = useState(false);

    // Função para buscar coordenadas pelo endereço
    const fetchCoordinates = async (addr) => {
        if (!addr) return;
        setLoading(true);
        try {
            const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(addr)}`;
            const res = await fetch(url);
            const data = await res.json();
            if (data.length > 0) {
                const coords = [parseFloat(data[0].lat), parseFloat(data[0].lon)];
                setForm(prev => ({ ...prev, coordinates: coords, address: addr }));
                setOpenMap(true);
            } else {
                alert('Endereço não encontrado!');
            }
        } catch (err) {
            console.error('Erro ao buscar coordenadas:', err);
            alert('Erro ao buscar localização.');
        } finally {
            setLoading(false);
        }
    };

    // Componente interno para capturar cliques no mapa
    const MapClick = () => {
        useMapEvents({
            click(e) {
                setForm(prev => ({ ...prev, coordinates: [e.latlng.lat, e.latlng.lng] }));
            },
        });
        return null;
    };

    return (
        <>
            <div className={styles.address_input_wrapper}>
                <input
                    type="text"
                    placeholder="Digite o endereço completo"
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    // style={{width: '85%'}}
                />
                <button
                    type="button"
                    onClick={() => fetchCoordinates(form.address)}
                    className='secundary_button'
                    disabled={loading}
                >
                    {loading ? 'Buscando...' : 'Ver no mapa'}
                </button>
            </div>

            {openMap && (
                <div className='modal_overlay' onClick={() => setOpenMap(false)}>
                    <div className='modal_container' onClick={(e) => e.stopPropagation()}>
                        <div className='modal_title'>
                            <h2>Escolha a localização</h2>
                        </div>

                        <MapContainer
                            center={
                                form.coordinates[0] && form.coordinates[1]
                                    ? form.coordinates
                                    : [0, 0]
                            }
                            zoom={form.coordinates[0] && form.coordinates[1] ? 15 : 2}
                            style={{ height: '70vh', width: '100%' }}
                        >
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            {form.coordinates[0] && form.coordinates[1] && (
                                <Marker position={form.coordinates} />
                            )}
                            <MapClick />
                        </MapContainer>

                        {form.coordinates[0] && form.coordinates[1] && (
                            <p className="mt-1 text-sm">
                                Latitude: {form.coordinates[0].toFixed(6)}, Longitude: {form.coordinates[1].toFixed(6)}
                            </p>
                        )}

                        <div className={styles.modal_buttons}>
                            <button
                                onClick={() => setOpenMap(false)}
                                className='danger_button'
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={() => setOpenMap(false)}
                                className='primary_button'
                            >
                                Confirmar localização
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
