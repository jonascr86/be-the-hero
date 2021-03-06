import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'
import './styles.css';
import heroesImage from '../../assets/heroes.png'
import logoImage from '../../assets/logo.svg'
import api from '../../services/api';

export default function Logon() {

    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try {
            const response = await api.post('session', { id });
            localStorage.setItem('ongName', response.data.name);
            localStorage.setItem('ongId', id);

            history.push('/profile');
            
        } catch (error) {
            alert(`Falha no login: ${error}`);
        }

    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImage} alt="Heroes" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>

                    <input 
                        placeholder="Sua ID" 
                        value={id}
                        onChange={e => setId(e.target.value)}    
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>

            </section>

            <img src={heroesImage} alt="Heroes" />
        </div>
    );
}