import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logoImage from '../../assets/logo.svg';
import './style.css';

import api from '../../services/api';

export default function NewIncident() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value
        }

        try {
            
            const response = await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            });
            alert(`ID do seu novo caso é: ${response.data.id}`)
            history.push('/profile');

        } catch (error) {
            alert(`Falha ao cadastrar novo caso: ${error}`)
        }
    }
    return (


        < div className="new-incident-container" >
            <div className="content">
                <section>
                    <img src={logoImage} alt="Be The Hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para que posa encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input
                        placeholder="Título do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea
                        type="text"
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <div className="group-button">
                        <button className="button-cancel">Cancelar</button>
                        <button className="button">Cadastrar</button>
                    </div>
                </form>
            </div>
        </div >
    )
}