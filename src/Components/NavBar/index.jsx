import React from 'react';
import CartWidget from '../CartWidget';
import './styles.css';

const NavBar = () => {
    return (
        <ul>
        <li>
            <a href="#checkIn">Check in</a>
        </li>
        <li>
            <a href="#administraTuViaje">Administra tu viaje</a>
        </li>
        <li>
            <a href="#empresas">Empresas</a>
        </li>
        <li>
            <a href="#iniciarSesion">Iniciar Sesión</a>
        </li>
        <CartWidget/>
    </ul>
 
    );
};

export default NavBar;