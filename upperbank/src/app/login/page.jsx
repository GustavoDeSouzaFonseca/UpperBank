'use client'
import React, { useState } from 'react';
import Router from 'next/router';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Link from 'next/link';

function Login() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsuarioChange = (e) => {
    setUsuario(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    const data = {
      usuario: usuario,
      password: password,
    };

    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Login successful');
        Router.push('/servicos');
      } else {
        console.error('Login failed');
        setError('Login falhou. Verifique suas credenciais.');
      }
    } catch (error) {
      console.error('Erro:', error);
      setError('Ocorreu um erro ao fazer login. Tente novamente mais tarde.');
    }
  };

  return (
    <div>
      <Navbar />

      <div className='bg-lime-950 w-full h-[38.5rem] flex justify-center items-center'>
        <div className='w-[23.75rem] h-[23.75rem] bg-slate-900 p-10 rounded-3xl flex flex-col justify-center items-center'>
          <span className='text-white'>Login</span>
          <input
            className='w-full mt-5 rounded-2xl'
            placeholder='Digite seu email'
            value={usuario}
            onChange={handleUsuarioChange}
          />
          <input
            className='w-full m-5 rounded-2xl'
            placeholder='Digite sua senha'
            type='password'
            value={password}
            onChange={handlePasswordChange}
          />
          <Link href='/forgotPassword'>
            <span className='text-lime-500'>Esqueceu a senha?</span>
          </Link>
          <button
            className='m-10 w-40 h-10 bg-lime-500 rounded-2xl'
            onClick={handleLogin}
          >
            Login
          </button>
          {error && <p className='text-red-500'>{error}</p>}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
