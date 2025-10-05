'use client';
import { apiService } from "@/services/apiService";
import { useEffect, useState } from "react";


export default function Teste() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await apiService.test.get();
                setData(res);
            } catch (error) {
                console.error("Erro ao buscar API:", error);
            }
        }

        fetchData();
    }, []);
    console.log(data);


    return (
        <p>AAAAAAAAAAAAAAAAA</p>
    );
}