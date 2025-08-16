'use client';
import { useEffect, useState } from 'react';
import styles from './index.module.css';
import { useSearchParams } from 'next/navigation';

export default function NewProjectModal() {
    const searchParams = useSearchParams();
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState({
        nome: '',
        cidade: '',
        estado: '',
        pais: '',
        linkedin: '',
        instagram: '',
        portfolio: '',
        dataNascimento: '',
        formacaoInstituicao: '',
        formacaoAno: '',
        biografia: '',
        especialidades: '',
    });


    useEffect(() => {
        setOpen(searchParams.get('modal') === 'newProject');
    }, [searchParams]);

    const fecharModal = () => {
        setOpen(false);

        // Remove query param
        const url = new URL(window.location.href);
        url.searchParams.delete('modal');
        window.history.replaceState({}, '', url);
    };

    if (!open) return null;

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <>
            {open && (
                <div className='modal_overlay' onClick={fecharModal}>

                    <div className='modal_container' onClick={(e) => e.stopPropagation()}>
                        <div className='modal_title'>
                            <h2>Adicionar Projeto</h2>
                        </div>
                        <div className={styles.form_group}>
                            <label>Nome</label>
                            <input name="nome" value={form.nome} onChange={handleChange} />

                            <label>Descrição</label>
                            <textarea name="biografia" value={form.biografia} onChange={handleChange} />

                            <label>Ano de conclusão</label>
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