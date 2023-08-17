import './globals.css'
import Link from 'next/link'
import localFont from 'next/font/local'

const batmanForeverA = localFont({ src: '../fonts/batman_forever/batmfa__.ttf' })

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <nav className={`fixed right-0 top-0 flex p-5 ${batmanForeverA.className}`}>
          <ul className="navList flex justify-around space-x-5 text-lg">
            <Link href={'/'} className='cursor-techno border border-sky-300 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm text-center w-40 py-1 bg-sky-400/10 hover:bg-sky-400/20 outline outline-0 hover:outline-1 hover:scale-110 active:bg-sky-400/40 duration-100 group'>
              <li className="navItem text-sky-400">Home</li>
            </Link>
            <Link href={'/'} className='cursor-techno border border-sky-300 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm text-center w-40 py-1 bg-sky-400/10 hover:bg-sky-400/20 outline outline-0 hover:outline-1 hover:scale-110 active:bg-sky-400/40 duration-100 group'>
              <li className="navItem text-sky-400">About</li>
            </Link>
            <Link href={'/'} className='cursor-techno border border-sky-300 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm text-center w-40 py-1 bg-sky-400/10 hover:bg-sky-400/20 outline outline-0 hover:outline-1 hover:scale-110 active:bg-sky-400/40 duration-100 group'>
              <li className="navItem text-sky-400">Portfolio</li>
            </Link>
            <Link href={'/'} className='cursor-techno border border-sky-300 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm text-center w-40 py-1 bg-sky-400/10 hover:bg-sky-400/20 outline outline-0 hover:outline-1 hover:scale-110 active:bg-sky-400/40 duration-100 group'>
              <li className="navItem text-sky-400">Contact</li>
            </Link>
          </ul>
        </nav>

        {children}
      </body>
    </html>
  )
}
