'use client'
import React, { useEffect, useState } from 'react';

export default function ClientDataPage() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://api.chucknorris.io/jokes/random');
                if (!res.ok) throw new Error('Erro ao buscar dados');
                const json = await res.json();
                console.log(json);
                
                setData(json);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // [] garante que rode apenas 1 vez ao montar o componente

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro: {error}</p>;

    return (
        <div>
            <h1>Dados do Backend</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}
