'use client'
import { useState } from "react";
import styles from './index.module.css'
import SearchBar from "@/components/arquitetoEhome/SearchBar";
import FilterBar from "@/components/arquitetoEhome/FilterBar";

export default function SearchAndFilters() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('todos');

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
    };

    return (
        <section className={styles.search_section}>
            <div className={styles.search_container}>
                <SearchBar onSearch={handleSearch} placeholder="Buscar por nome do arquiteto ou projeto..." />
                <FilterBar
                    filters={[
                        { id: 'todos', label: 'Todos' },
                        { id: 'residencial', label: 'Residencial' },
                        { id: 'comercial', label: 'Comercial' },
                        { id: 'urbano', label: 'Urbano' },
                        { id: 'sustentavel', label: 'Sustentável' },
                    ]}
                    selectedFilter={selectedFilter}
                    onFilterChange={handleFilterChange}
                />
            </div>
        </section>
    )
}