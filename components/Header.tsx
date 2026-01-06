import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { COLORS } from '@/constants/colors';

function Header() {
  return (
    <header className='p-3'>
      <Image 
        src='/logo_header.png' alt="" 
        width={150}
        height={100}
      />

      <nav className='hidden md:block'>
        <Link href='/'>O que é ESG</Link>
        <Link href='/'>Por que ESG</Link>
        <Link href='/'>Os Caminhos</Link>
        <Link href='/'>Soluções</Link>
        <Link href='/'>Tecnologia</Link>
      </nav>

      <div>
        <button className='demo_button'>Ver Demo</button>
      </div>
    </header>
  )
}

export default Header;