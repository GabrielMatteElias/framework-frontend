// components/EditArchitectModal.js
'use client';

import { useState } from 'react';
import styles from './index.module.css';
import { apiService } from '@/services/apiService';

export default function EditArchitectModal({ architect }) {
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState({
        name: architect.name || '',
        nationality: architect.nacionality || '',
        subtitle: architect.subtitle || '',
        birthDate: architect.birthDate || '',
        biography: architect.biography || '',
        speciality: architect.speciality?.join(', ') || '',
        trainingName: architect.training?.name || '',
        trainingYear: architect.training?.year || '',
        linkedin: architect.socialMedia?.linkedin || '',
        instagram: architect.socialMedia?.instagram || '',
        portfolio: architect.socialMedia?.portfolio || '',
        city: architect.location?.city || '',
        state: architect.location?.state || '',
        country: architect.location?.country || '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleUpdate = () => {
        const payload = {
            name: form.name,
            nationality: form.nationality, // cuidado: no state usou "nacionality" (typo)
            subtitle: form.subtitle,
            birthDate: form.birthDate,
            biography: form.biography,
            speciality: form.speciality.split(',').map(s => s.trim()), // string → array
            verified: architect.verified ?? false,
            trending: architect.trending ?? false,
            training: {
                name: form.trainingName,
                year: Number(form.trainingYear),
            },
            socialMedia: {
                linkedin: form.linkedin,
                instagram: form.instagram,
                portfolio: form.portfolio,
            },
            stats: {
                totalProjects: 50,
                esgProjects: 10,
                views: 5000,
                likes: 1200,
                followers: 800
            },
            location: {
                city: form.city,
                state: form.state,
                country: form.country,
            },
        };
        const formData = new FormData();
        formData.append("data", payload);
        formData.append("file", '');

        const res = apiService.architect.update(architect.id, formData, { "Content-Type": "multipart/form-data" })
    }

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
                            <input name="name" value={form.name} onChange={handleChange} />

                            <label>Subtitulo</label>
                            <input name="subtitle" value={form.subtitle} onChange={handleChange} />

                            <label>Biografia</label>
                            <div className={styles.textareaWrapper}>
                                <textarea
                                    name="biography"
                                    value={form.biography}
                                    onChange={handleChange}
                                    className={styles.biography}
                                    maxLength={500}
                                />
                                <div
                                    className={styles.counter}
                                >
                                    {form.biography.length}/500
                                </div>
                            </div>

                            <label>Nacionalidade</label>
                            <input name="nationality" placeholder="País" value={form.nationality} onChange={handleChange} />


                            <label>Data de Nascimento</label>
                            <input name="birthDate" type="date" value={form.birthDate} onChange={handleChange} />

                            <label>Formação</label>
                            <input name="trainingName" placeholder="Instituição" value={form.trainingName} onChange={handleChange} />
                            <input name="trainingYear" placeholder="Ano de conclusão" type="number" value={form.trainingYear} onChange={handleChange} />

                            <label>Localização</label>
                            <input name="city" placeholder="Cidade" value={form.city} onChange={handleChange} />
                            <input name="state" placeholder="Estado" value={form.state} onChange={handleChange} />
                            <input name="country" placeholder="País" value={form.country} onChange={handleChange} />

                            <label>Especialidades</label>
                            <input name="speciality" value={form.speciality} onChange={handleChange} />

                            <label>Redes Sociais</label>
                            <input name="linkedin" placeholder="LinkedIn" value={form.linkedin} onChange={handleChange} />
                            <input name="instagram" placeholder="Instagram" value={form.instagram} onChange={handleChange} />
                            <input name="portfolio" placeholder="Portfólio" value={form.portfolio} onChange={handleChange} />

                        </div>
                        <div className={styles.button_group}>
                            <button className='primary_button' onClick={handleUpdate}>Salvar</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
