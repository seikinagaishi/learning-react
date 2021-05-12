import React, { useEffect } from 'react';
import './style.css';
import icon from '../../assets/pencil.png';
import { Link } from 'react-router-dom';


const Home = () => {
    useEffect(() => {
        const option = document.getElementsByClassName('options');
        for(let i = 0; i < option.length; i++) {
            option[i].addEventListener('click', () => {
                let dropdown = document.getElementsByTagName('ul')[i];
                if(dropdown.className == 'dropdown-close') {
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

    return(
        <div id="page-home">
            <main id="home">
                <section className="card">
                    <div className="card-header">
                        <h1>Formação Rochosa</h1>
                        <button type="button" className="options">•••</button>
                        <ul className="dropdown-close">
                            <li>Excluir obra</li>
                        </ul>
                    </div>

                    <div className="card-body">
                        <section className="card-left">
                            <div className="card-image">
                                <img src="" alt="Obra" />
                            </div>
                        </section>

                        <aside>
                            <section className="card-info">
                                <div className="info">
                                    <p className="info-title">AUTOR</p>
                                    <p className="info-description">Ian Beckley</p>
                                </div>
                                <div className="info-group">
                                    <p className="info-title">ANO</p>
                                    <p className="info-description">2019</p>
                                </div>
                                <div className="info-group">
                                    <p className="info-title">EPS/CAPS</p>
                                    <p className="info-description">0</p>
                                </div>
                            </section>
                        </aside>
                    </div>
                </section>
            </main>

            <Link className="btn-criar" to="/criar">
                <img src={icon} />
            </Link>
        </div>
    );
};

export default Home;