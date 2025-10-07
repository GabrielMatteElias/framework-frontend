'use client';
import { useEffect, useState } from 'react';
import styles from './index.module.css';
import { useSearchParams } from 'next/navigation';
import LocationPicker from '@/components/LocationPicker';
import { formataData } from '@/utils/formaters';

const MAX_CHARS_LONG_DESCRIPTION = 1000;
const MAX_CHARS_SHORT_DESCRIPTION = 300;

export default function NewProjectModal() {
    const searchParams = useSearchParams();

    useEffect(() => {
        setOpen(searchParams.get('modal') === 'newProject');
    }, [searchParams]);

    const [open, setOpen] = useState(false);
    const [form, setForm] = useState({
        title: '',
        longDescription: '',
        shortDescription: '',
        area: '',
        startDate: '',
        dataConclusao: '',
        onGoing: false,
        country: '',
        state: '',
        city: '',
        address: '',
        coordinates: ['', ''],
        gallery: '',
        esg: false,
    });
    const [errors, setErrors] = useState({}); // erros por campo

    const fecharModal = () => {
        setOpen(false);

        // Remove query param
        const url = new URL(window.location.href);
        url.searchParams.delete('modal');
        window.history.replaceState({}, '', url);
    };

    if (!open) return null;

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name === "longDescription") {
            let val = value.slice(0, MAX_CHARS_LONG_DESCRIPTION);
            setForm({ ...form, [name]: val });
            if (val.length === MAX_CHARS_LONG_DESCRIPTION) {
                setErrors((prev) => ({ ...prev, longDescription: "Você atingiu o limite de 1000 caracteres." }));
            } else {
                setErrors((prev) => ({ ...prev, longDescription: "" }));
            }

        } else if (name === "shortDescription") {
            let val = value.slice(0, MAX_CHARS_SHORT_DESCRIPTION);
            setForm({ ...form, [name]: val });
            if (val.length === MAX_CHARS_SHORT_DESCRIPTION) {
                setErrors((prev) => ({ ...prev, shortDescription: "Você atingiu o limite de 300 caracteres." }));
            } else {
                setErrors((prev) => ({ ...prev, shortDescription: "" }));
            }

        } else if (type === "file") {
            const fileArray = Array.from(e.target.files);

            const imageUrls = fileArray.map((file) => URL.createObjectURL(file));

            setForm({
                ...form,
                [name]: imageUrls,
                [`${name}Files`]: fileArray,
            });

        } else if (type === "checkbox") {
            setForm({ ...form, [name]: checked });
            if (name === "onGoing") {
                setForm(prev => ({
                    ...prev,
                    endDate: checked ? "" : prev.endDate
                }));
            }

        } else {
            setForm({ ...form, [name]: value });
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const handleSave = async () => {
        const requiredFields = ["title", "longDescription", "shortDescription", "startDate", "area", "country", "state", "city", "address", "gallery"];
        let newErrors = {};

        requiredFields.forEach((field) => {
            const value = form[field];

            if (
                value === undefined ||
                value === null ||
                (typeof value === "string" && value.trim() === "") ||
                (Array.isArray(value) && value.length === 0)
            ) {
                newErrors[field] = "Campo obrigatório";
            }
        });

        if (!form.onGoing && (!form.endDate || form.endDate.trim() === "")) {
            newErrors.endDate = "Campo obrigatório";
        }

        if (form.longDescription.length > MAX_CHARS_LONG_DESCRIPTION) {
            newErrors.longDescription = "A descrição não pode ter mais de 1000 caracteres.";
        }

        if (form.shortDescription.length > MAX_CHARS_SHORT_DESCRIPTION) {
            newErrors.shortDescription = "A descrição não pode ter mais de 300 caracteres.";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;

        const isoStartDate = formataData(form.startDate, 'us');
        const isoEndDate = form.onGoing ? null : formataData(form.endDate, 'us');

        const payload = {
            title: form.title,
            shortDescription: form.shortDescription,
            longDescription: form.longDescription,
            area: form.area,
            startDate: isoStartDate,
            endDate: isoEndDate,
            ongoing: form.onGoing,
            location: {
                city: form.city,
                state: form.state,
                country: form.country,
                address: form.address,
                coordinates: {
                    latitude: Number(form.coordinates[0]),
                    longitude: Number(form.coordinates[1])
                }
            },
            esg: form.esg,
            architects: [
                {
                    architectId: 1,
                    role: "Arquiteto Principal"
                }
            ]
        };

        const formData = new FormData();
        formData.append("data", JSON.stringify(payload))
        if (form.galleryFiles && form.galleryFiles.length > 0) {
            form.galleryFiles.forEach((file) => {
                formData.append("files", file);
            });
        }

        try {
            const res = await fetch("https://framework-backend-endq.onrender.com/api/project", {
                method: "POST",
                body: formData,
            });

            if (!res.ok) {
                throw new Error(`Erro ${res.status}: ${res.statusText}`);
            }

            const data = await res.json();
            if (data.id) {
                const url = new URL(window.location.href);
                url.searchParams.delete('modal');
                window.history.replaceState({}, '', url);
                window.location.reload()
            }
            return;
        } catch (err) {
            return
        }
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
                            <label>Título *</label>
                            <input name="title" value={form.title} onChange={handleChange} />
                            {errors.title && <span style={{ color: "red" }}>{errors.title}</span>}

                            <label>Descrição completa *</label>
                            <textarea name="longDescription" value={form.longDescription} onChange={handleChange} />
                            {errors.longDescription && <span style={{ color: "red" }}>{errors.longDescription}</span>}
                            <span>{form.longDescription.length}/{MAX_CHARS_LONG_DESCRIPTION} caracteres</span>

                            <label>Descrição curta *</label>
                            <textarea name="shortDescription" value={form.shortDescription} onChange={handleChange} />
                            {errors.shortDescription && <span style={{ color: "red" }}>{errors.shortDescription}</span>}
                            <span>{form.shortDescription.length}/{MAX_CHARS_SHORT_DESCRIPTION} caracteres</span>

                            <label>Data de início *</label>
                            <input name="startDate" type="date" value={form.startDate} onChange={handleChange} />
                            {errors.startDate && <span style={{ color: "red" }}>{errors.startDate}</span>}

                            <label>Data de conclusão *</label>
                            <input name="endDate" type="date" value={form.endDate} onChange={handleChange} disabled={form.onGoing} />
                            {errors.endDate && <span style={{ color: "red" }}>{errors.endDate}</span>}

                            <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.5rem" }}>
                                <input
                                    type="checkbox"
                                    name="onGoing"
                                    checked={form.onGoing}
                                    onChange={handleChange}
                                />
                                Projeto em andamento
                            </label>

                            <label>Área do Projeto</label>
                            <div className={styles.input_area}>
                                <input
                                    type="number"
                                    name="area"
                                    value={form.area}
                                    onChange={handleChange}
                                    min="0"
                                    max="1000000"
                                />
                                <span>m²</span>
                            </div>
                            {errors.area && <span style={{ color: "red" }}>{errors.area}</span>}

                            <h4>Localização</h4>
                            <label>País *</label>
                            <input name="country" value={form.country} onChange={handleChange} />
                            {errors.country && <span style={{ color: "red" }}>{errors.country}</span>}

                            <label>Estado *</label>
                            <input name="state" value={form.state} onChange={handleChange} />
                            {errors.state && <span style={{ color: "red" }}>{errors.state}</span>}

                            <label>Cidade *</label>
                            <input name="city" value={form.city} onChange={handleChange} />
                            {errors.city && <span style={{ color: "red" }}>{errors.city}</span>}

                            <label>Endereço completo *</label>
                            <LocationPicker form={form} setForm={setForm} />
                            {errors.address && <span style={{ color: "red" }}>{errors.address}</span>}

                            <h4>Galeria *</h4>
                            <input name="gallery" type='file' onChange={handleChange} />
                            {errors.gallery && <span style={{ color: "red" }}>{errors.gallery}</span>}

                            <div className={styles.checkbox_wrapper_page}>
                                <input name="esg" type='checkbox' checked={form.esg} onChange={handleChange} />
                                <span>Solicitar avaliação ESG</span>
                            </div>
                            <p className={styles.esg_warning}>
                                Marque esta opção se deseja que seu projeto seja avaliado quanto às normas de sustentabilidade ESG.
                                Caso aprovado, ele poderá receber o selo ESG.
                            </p>

                        </div>
                        <div className={styles.button_group}>
                            <button type="button" className='primary_button' onClick={handleSave}>Salvar</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}