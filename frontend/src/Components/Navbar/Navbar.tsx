import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as api from '../../api';

export default function Navbar(): JSX.Element {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleLogout = (): void => {
    api.logout().then(() => dispatch({ type: 'LOGOUT' }));
    nav('/');
  };

  return (
    <nav>
      <div className="nav-wrapper cyan darken-1">
        <Link
          to="/"
          style={{ textDecoration: 'none' }}
          className="brand-logo right"
        >
          Своя игра
        </Link>
        <ul className="left hide-on-med-and-down">
          <li>
            <Link style={{ textDecoration: 'none' }} to="/auth/sign-up">
              Регистрация
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none' }} to="/auth/login">
              Вход
            </Link>
          </li>
        </ul>
        <ul className="left hide-on-med-and-down">
          <li>
            <a
              href="/"
              style={{ textDecoration: 'none' }}
              onClick={handleLogout}
            >
              Выход
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
