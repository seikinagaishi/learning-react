import React, { useEffect, useState } from 'react';
import './style.css';
import icon from '../../assets/pencil.png';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

interface obraArray {
    id: number,
    nome: string,
    autor: string,
    ano: number,
    capitulos: number,
    foto_url: string
}

const Home = () => {
    const history = useHistory();

    useEffect(() => {
        const option = document.getElementsByClassName('options');
        for(let i = 0; i < option.length; i++) {
            option[i].addEventListener('click', () => {
                let dropdown = document.getElementsByTagName('ul')[i];
                if(dropdown.className === 'dropdown-close') {
                    let alreadyOpened = document.querySelector('.dropdown');
                    if(alreadyOpened) {
                        alreadyOpened.className = 'dropdown-close';
                    }

                    dropdown.className = 'dropdown';
                } else {
                    dropdown.className = 'dropdown-close';
                }
            });
        }
    });

    const [obras, setObras] = useState<obraArray[]>([]);

    useEffect(() => {
        api.get('lista').then(res => {
            setObras(res.data);
        })
    }, []);

    useEffect(() => {
        const btnsExcluir = document.getElementsByClassName('btn-excluir');
        for(let i = 0; i < btnsExcluir.length; i++) {
            btnsExcluir[i].addEventListener('click', () => {
                var id = btnsExcluir[i].id

                api.delete(`deletar/${id}`);
                history.go(0);
            });
        }
    })
    

    return(
        <div id="page-home">
            <main id="home">
                {obras.map((obra) => (
                    <section className="card" key={obra.id}>
                        <div className="card-header">
                            <h1>{obra.nome}</h1>
                            <button type="button" className="options">•••</button>
                            <ul className="dropdown-close">
                                <li id={'' + obra.id} className="btn-excluir">Excluir obra</li>
                            </ul>
                        </div>

                        <div className="card-body">
                            <section className="card-left">
                                <div className="card-image">
                                    <img src={obra.foto_url} alt={obra.nome} />
                                </div>
                            </section>

                            <aside>
                                <section className="card-info">
                                    <div className="info">
                                        <p className="info-title">AUTOR</p>
                                        <p className="info-description">{obra.autor}</p>
                                    </div>
                                    <div className="info-group">
                                        <p className="info-title">ANO</p>
                                        <p className="info-description">{obra.ano}</p>
                                    </div>
                                    <div className="info-group">
                                        <p className="info-title">EPS/CAPS</p>
                                        <p className="info-description">{obra.capitulos}</p>
                                    </div>
                                </section>
                            </aside>
                        </div>
                    </section>
                ))};
            </main>

            <Link className="btn-criar" to="/criar">
                <img alt="Criar Postagem" src={icon} />
            </Link>
        </div>
    );
};

export default Home;