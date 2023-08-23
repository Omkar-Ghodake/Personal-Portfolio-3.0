"use client"

import './globals.css'
import Link from 'next/link'
import localFont from 'next/font/local'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const batmanForeverA = localFont({ src: '../fonts/batman_forever/batmfa__.ttf' })

export default function RootLayout({ children }) {

  const pathname = usePathname()

  useEffect(() => {
    console.log(pathname)
  }, [pathname])

  return (
    <html lang='en'>
      <body>
        <nav className={`fixed right-0 top-0 flex p-5 ${batmanForeverA.className}`}>
          <ul className="navList flex justify-around space-x-5 text-lg">
            <Link href={'/'} className={`cursor-techno border border-sky-300 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm text-center w-40 py-1 ${pathname === '/' ? 'bg-sky-400/40' : 'bg-sky-400/10'} hover:bg-sky-400/20 outline outline-0 hover:outline-1 hover:scale-110 active:bg-sky-400/40 duration-100 group`}>
              <li className="navItem text-sky-400">Home</li>
            </Link>

            <Link href={'/about'} className={`cursor-techno border border-sky-300 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm text-center w-40 py-1 ${pathname === '/about' ? 'bg-sky-400/40' : 'bg-sky-400/10'} hover:bg-sky-400/20 outline outline-0 hover:outline-1 hover:scale-110 active:bg-sky-400/40 duration-100 group`}>
              <li className="navItem text-sky-400">About</li>
            </Link>

            <Link href={'/portfolio'} className={`cursor-techno border border-sky-300 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm text-center w-40 py-1 ${pathname === '/portfolio' ? 'bg-sky-400/40' : 'bg-sky-400/10'} hover:bg-sky-400/20 outline outline-0 hover:outline-1 hover:scale-110 active:bg-sky-400/40 duration-100 group`}>
              <li className="navItem text-sky-400">Portfolio</li>
            </Link>

            <Link href={'/contact'} className={`cursor-techno border border-sky-300 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm text-center w-40 py-1 ${pathname === '/contact' ? 'bg-sky-400/40' : 'bg-sky-400/10'} hover:bg-sky-400/20 outline outline-0 hover:outline-1 hover:scale-110 active:bg-sky-400/40 duration-100 group`}>
              <li className="navItem text-sky-400">Contact</li>
            </Link>

          </ul>
        </nav>

        {children}
      </body>
    </html>
  )
}
