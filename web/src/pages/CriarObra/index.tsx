import React, { useState, FormEvent, ChangeEvent } from 'react';
import './style.css';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

const CriarObra = () => {
    const history = useHistory();

    const [formData, setFormData] = useState({
        nome: '',
        autor: '',
        ano: '',
        capitulos: '',
        foto: 'obra_1.jpg',
    })

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const {
            nome,
            autor,
            ano,
            capitulos,
            foto
        } = formData;

        const data = {
            nome,
            autor,
            ano,
            capitulos,
            foto
        }

        await api.post('criar', data);
        history.push('/');
    }

    return(
        <div id="page-criar">
            <main id="main-criar">
                <form onSubmit={handleSubmit}>
                    <h1>CADASTRO DE OBRA</h1>

                    <div className="field">
                        <label className="form-label" htmlFor="nome">Nome</label>
                        <input className="form-input" type="text" name="nome" onChange={handleInputChange} required/>
                    </div>

                    <div className="field">
                        <label className="form-label" htmlFor="autor">Autor</label>
                        <input className="form-input" type="text" name="autor" onChange={handleInputChange} required/>
                    </div>

                    <div className="field-group">
                        <label className="form-label" htmlFor="ano">Ano de Publicação</label>
                        <input className="form-input" type="number" name="ano" onChange={handleInputChange} required/>
                    </div>

                    <div className="field-group">
                        <label className="form-label" htmlFor="capitulos">Episódios/Capítulos</label>
                        <input className="form-input" type="number" name="capitulos" onChange={handleInputChange} required/>
                    </div>

                    <div className="field-file">
                        <input id="file-pic" type="file" name="foto"/>
                        <div className="field-file-image">
                            <p>+</p>
                        </div>
                        <label htmlFor="foto">+ Adicionar foto</label>
                    </div>

                    <button className="form-button" type="submit">Cadastrar</button>
                </form>

                <Link to="/" className="btn-link">Cancelar</Link>
            </main>
        </div>
    );
};

export default CriarObra;