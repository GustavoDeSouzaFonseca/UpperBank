import React from 'react';
import Image from "next/image";
import logotipo2 from '../../../assets/logotipo-2.png'

function Footer() {
    return <div className='fixed bottom-0 left-0 w-full bg-slate-900 text-white p-10 h-[10.25rem] text-center '>
        <div className='bg-slate-900 flex flex-row justify-between mx-60'>
            <Image
                src={logotipo2}
                alt=''
            />
            <div className='flex flex-col'>
                <text className='text-slate-500'>Instagram: @upperBank</text>
                <text className='text-slate-500'>Facebook: @upperBank</text>
            </div>
        </div>
    </div>
}

export default Footer;