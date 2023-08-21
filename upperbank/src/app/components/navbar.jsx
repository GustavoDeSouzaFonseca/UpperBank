import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logotipo from '../../../assets/logotipoHome.png'

function Navbar() {
  return <div>
    <Image
      src={logotipo}
      alt='logotipo da empresa'
    />

    <Link href="/servicos"><span className='text-slate-950 no-underline'>Serviços</span></Link>
    <Link href={"/about"} className='headers-text'>Sobre nós</Link>

    <Link href={"/about"} className='headers-text'>Entrar</Link>
    <Link href={"/registrar"}>
      <button>Registrar</button>
    </Link>

  </div>;
}

export default Navbar;