import React from 'react';
import styles from './index.module.css';

const Filtros = ({ handleChange }) => {
    return (
        <div className={styles.filtrosContent}>
            <input name="localizacao" placeholder="Localização" onChange={handleChange} />

            <select name="tipo" onChange={handleChange} defaultValue="">
                <option value="">Tipo de Arquitetura</option>
                <option value="Residencial">Residencial</option>
                <option value="Comercial">Comercial</option>
                <option value="Urbano">Urbano</option>
                <option value="Sustentável">Sustentável</option>
            </select>

            <select name="experiencia" onChange={handleChange} defaultValue="">
                <option value="">Anos de experiência</option>
                <option value="0-5">0-5 anos</option>
                <option value="5-10">5-10 anos</option>
                <option value="10+">10+ anos</option>
            </select>

            <select name="formacao" onChange={handleChange} defaultValue="">
                <option value="">Formação Acadêmica</option>
                <option value="USP">USP</option>
                <option value="UFPR">UFPR</option>
                <option value="UFRJ">UFRJ</option>
                <option value="Outros">Outros</option>
            </select>

            <select name="qtdProjetos" onChange={handleChange} defaultValue="">
                <option value="">Projetos Publicados</option>
                <option value="1-5">1-5</option>
                <option value="6-10">6-10 anos</option>
                <option value="11+">11+</option>
            </select>

            <select name="verificado" onChange={handleChange} defaultValue="">
                <option value="">Verificado</option>
                <option value="1">Sim</option>
                <option value="0">Não</option>
            </select>

            <label className={styles.checkboxWrapper}>
                <input type="checkbox" name="esg" onChange={handleChange} />
                <span>Selo ESG</span>
            </label>
        </div>
    );
};

export default Filtros;