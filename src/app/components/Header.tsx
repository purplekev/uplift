'use client'
import Link from 'next/link';
import { FC } from 'react'
import GithubIcon from '../icons/github'
import LogoIcon from '../icons/logo'
import ThemeSwitch from './ThemeSwitch'
import { Press_Start_2P } from 'next/font/google'
const inter = Press_Start_2P({
  subsets: ['latin'],
  weight: '400'
})

interface Props {
  locale: string
}
export const Header: FC<Props> = ({ locale }) => {
  return (
    <div className='mx-auto flex justify-between items-center max-w-screen-3xl px-10' style={{ height: '100px' }}>
      <div className='flex-auto'>
        {/* <strong className='text-center text-2xl font-extrabold leading-tight bg-span-bg bg-clip-text p-7 block'>uplift</strong> */}
      </div>
      <div className='flex-auto'>
        <strong className='text-center text-2xl font-extrabold leading-tight bg-span-bg bg-clip-text p-7 block'>username</strong>
      </div>
      <div className='flex-auto'>
        {/* <ThemeSwitch /> */}
        {/* <strong className='text-center text-2xl font-extrabold leading-tight bg-span-bg bg-clip-text p-7 block'>uplift</strong> */}
      </div>
      {/* <div className='mx-auto' style={{ width: '80px'}}>
        // <ThemeSwitch />
      </div> */}
    </div>
  );
}



// <Link href='/'>
// <div className='flex items-center'>
//   <div className='mb-2 h-16 w-16'>
//     <LogoIcon />
//   </div>
//   <strong className={`text-center text-2xl font-extrabold leading-tight ${inter.className} bg-span-bg bg-clip-text p-7`}>uplift</strong>
// </div>
// </Link>
// <div className='flex flex-grow justify-center'>
// <strong className={`text-center text-2xl font-extrabold leading-tight ${inter.className} bg-span-bg bg-clip-text`}>username</strong>
// </div>
// <div className='flex items-center justify-end gap-3'>
// <nav className='mr-2 inline-flex gap-5'>
//   {/* <Link href={`/about`}>
//     About
//   </Link> */}
//   {/* <a href=''>Support</a>
//   <a href=''>Other</a> */}
// </nav>
// <ThemeSwitch />
// <a
//   href='https://github.com/yahyaparvar/nextjs-template'
//   target='_blank'
//   className='ml-1 size-8'
// >
//   <GithubIcon />
// </a>
// </div>