'use client'
import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Link from 'next/link';
import { useState } from 'react';


// import { Container } from './styles';

function about() {

  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const handleUsuarioChange = (e) => {
    setUsuario(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const data = {
      usuario: usuario,
      password: password,
    };

    fetch('http://localhost:8080/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Login successful');
        } else {
          console.error('Login failed');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return <div>
    <Navbar />

    <div className='bg-lime-950 w-full h-[38.5rem] flex justify-center items-center'>
      <div className='w-[23.75rem] h-[23.75rem] bg-slate-900 p-10 rounded-3xl flex flex-col justify-center items-center'>
        <span className='text-white'>Login</span>
        <input
          className='w-full mt-5 rounded-2xl'
          placeholder='  Digite seu email'
          value={usuario}
          onChange={handleUsuarioChange}
        />
        <input
          className='w-full m-5 rounded-2xl'
          placeholder='  Digite sua senha'
          type='password'
          value={password}
          onChange={handlePasswordChange}
        />
        <Link href={"/forgotPassword"}><span className='text-lime-500'>Esqueceu a senha?</span></Link>
        <button
          className='m-10 w-40 h-10 bg-lime-500 rounded-2xl'
          onClick={handleLogin}
        >Login</button>
      </div>
    </div>

    <Footer />

  </div>;
}

export default about;