import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi'
import { FiTrash2 } from 'react-icons/fi'

import './style.css';
import logoImage from '../../assets/logo.svg';

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImage} alt="Be The Hero" />
                <span>Bem vindo a APAD</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="E02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>
            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso tets</p>
                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição teste</p>
                    <strong>Valor</strong>
                    <p>R$ 200,00</p>
                    <button>
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso tets</p>
                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição teste</p>
                    <strong>Valor</strong>
                    <p>R$ 200,00</p>
                    <button>
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso tets</p>
                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição teste</p>
                    <strong>Valor</strong>
                    <p>R$ 200,00</p>
                    <button>
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso tets</p>
                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição teste</p>
                    <strong>Valor</strong>
                    <p>R$ 200,00</p>
                    <button>
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
            </ul>
        </div>
    )
}

