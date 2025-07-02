// components/EditArchitectModal.js
'use client';

import { useState } from 'react';
import styles from './EditArchitectModal.module.css';

export default function EditArchitectModal({ arquiteto }) {

    const [open, setOpen] = useState(false);
    const [form, setForm] = useState({
        nome: arquiteto.nome,
        cidade: arquiteto.localizacao.cidade,
        estado: arquiteto.localizacao.estado,
        pais: arquiteto.localizacao.pais,
        linkedin: arquiteto.redesSociais.linkedin || '',
        instagram: arquiteto.redesSociais.instagram || '',
        portfolio: arquiteto.redesSociais.portfolio || '',
        dataNascimento: arquiteto.dataNascimento,
        formacaoInstituicao: arquiteto.formacao.instituicao,
        formacaoAno: arquiteto.formacao.ano,
        biografia: arquiteto.biografia,
        especialidades: arquiteto.especialidades.join(', '),
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <>
            <button className={styles.edit_button} onClick={() => setOpen(true)}>Editar Perfil</button>

            {open && (
                <div className='modal_overlay' onClick={() => setOpen(false)}>

                    <div className='modal_container' onClick={(e) => e.stopPropagation()}>
                        <div className='modal_title'>
                            <h2>Editar Perfil</h2>
                        </div>
                        <div className={styles.form_group}>
                            <label>Nome</label>
                            <input name="nome" value={form.nome} onChange={handleChange} />

                            <label>Biografia</label>
                            <textarea name="biografia" value={form.biografia} onChange={handleChange} />

                            <label>Data de Nascimento</label>
                            <input name="dataNascimento" type="date" value={form.dataNascimento} onChange={handleChange} />

                            <label>Formação</label>
                            <input name="formacaoInstituicao" value={form.formacaoInstituicao} onChange={handleChange} />
                            <input name="formacaoAno" type="number" value={form.formacaoAno} onChange={handleChange} />

                            <label>Localização</label>
                            <input name="cidade" placeholder="Cidade" value={form.cidade} onChange={handleChange} />
                            <input name="estado" placeholder="Estado" value={form.estado} onChange={handleChange} />
                            <input name="pais" placeholder="País" value={form.pais} onChange={handleChange} />

                            <label>Especialidades</label>
                            <input name="especialidades" value={form.especialidades} onChange={handleChange} />

                            <label>Redes Sociais</label>
                            <input name="linkedin" placeholder="LinkedIn" value={form.linkedin} onChange={handleChange} />
                            <input name="instagram" placeholder="Instagram" value={form.instagram} onChange={handleChange} />
                            <input name="portfolio" placeholder="Portfólio" value={form.portfolio} onChange={handleChange} />

                        </div>
                        <div className={styles.button_group}>
                            <button className='primary_button'>Salvar</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
