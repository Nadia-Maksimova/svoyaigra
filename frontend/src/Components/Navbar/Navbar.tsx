import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(): JSX.Element {
  return (

    <nav>
      <div className="nav-wrapper cyan darken-1">
        <Link to="/" style={{ textDecoration: 'none' }} className="brand-logo right">Своя игра</Link>
        <ul className="left hide-on-med-and-down">
          <li><Link style={{ textDecoration: 'none' }} to="/auth/registration">Регистрация</Link></li>
          <li><Link style={{ textDecoration: 'none' }} to="/auth/login">Вход</Link></li>
        </ul>
      </div>
    </nav>
  );
}
