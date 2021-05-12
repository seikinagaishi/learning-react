import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const CriarObra = () => {
    return(
        <div id="page-criar">
            <main id="main-criar">
                <form>
                    <h1>CADASTRO DE OBRA</h1>

                    <div className="field">
                        <label className="form-label" htmlFor="nome">Nome</label>
                        <input className="form-input" type="text" name="nome"/>
                    </div>

                    <div className="field">
                        <label className="form-label" htmlFor="autor">Autor</label>
                        <input className="form-input" type="text" name="autor"/>
                    </div>

                    <div className="field-group">
                        <label className="form-label" htmlFor="ano">Ano de Publicação</label>
                        <input className="form-input" type="number" name="ano"/>
                    </div>

                    <div className="field-group">
                        <label className="form-label" htmlFor="eps">Episódios/Capítulos</label>
                        <input className="form-input" type="text" name="eps"/>
                    </div>

                    <div className="field-file">
                        <input type="file" name="foto"/>
                        <div className="field-file-image">
                            <p>+</p>
                        </div>
                        <label htmlFor="foto">+ Adicionar foto</label>
                    </div>

                    <button type="button">Cadastrar</button>
                </form>
            </main>
        </div>
    );
};

export default CriarObra;