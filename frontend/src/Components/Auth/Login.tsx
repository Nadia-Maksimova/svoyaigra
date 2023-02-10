import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as api from '../../api';

export default function Login(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const nav = useNavigate();

  const log = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    api.log({ email, password }).then((data) => {
      dispatch({
        type: 'LOG_USER',
        payload: data,
      });
      nav('/');
    });
  };
  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card bg-light text-black"
              style={{ borderRadius: '1rem' }}
            >
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <p
                    className="data2"
                    style={{ backgroundColor: 'white', color: 'red' }}
                  />
                  <h2 className="fw-bold mb-2 text-uppercase">Войти</h2>
                  <p className="text-white-50 mb-5">
                    Введите ваш email и пароль
                  </p>
                  <form
                    id="login"
                    // action="/auth/sign-in"
                    method="post"
                    onSubmit={log}
                  >
                    <div className="form-outline form-white mb-4">
                      <input
                        name="email"
                        type="email"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label className="form-label" htmlFor="typeEmailX">
                        Email
                      </label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        name="password"
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label className="form-label" htmlFor="typePasswordX">
                        Пароль
                      </label>
                    </div>

                    <button
                      className="btn btn-outline-dark btn-lg px-5"
                      type="submit"
                    >
                      Войти
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
