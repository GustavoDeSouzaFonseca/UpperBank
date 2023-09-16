import React from 'react';
import Link from 'next/link';


function Navbar() {
  return <div className='flex flex-row justify-around'>
    <img
      src="/logotipoHome.png"
      alt='logotipo da empresa'
    />

    <div className='w-60 flex justify-around'>
      <Link href="/servicos" className='mt-4'>Serviços</Link>
      <Link href={"/login"} className='mt-4'>Sobre nós</Link>
    </div>
    
    <div className='w-60 flex justify-around'>
      <Link href={"/login"} className='mt-4'>Entrar</Link>
      <Link href={"/registrar"}>
        <button className='bg-neutral-900 text-white w-20 h-10 rounded-md mt-2'>Registrar</button>
      </Link>
    </div>
    

  </div>;
}

export default Navbar;