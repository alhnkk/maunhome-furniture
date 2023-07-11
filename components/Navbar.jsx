'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { GrClose } from 'react-icons/gr'
import { TbMenu } from 'react-icons/tb'
import logo from '../public/logo.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    return (
        <div className="bg-second text-main border-b">
            <nav className="navbar">
                <Link href="/" className="cursor-pointer">
                    <Image
                        className="text-2xl lg:text-5xl font-semibold"
                        src={logo}
                        width={200}
                        height={200}
                    />
                </Link>
                <div className="lg:hidden relative">
                    <button
                        className="text-xl font-medium focus:outline-none"
                        onClick={toggleMenu}
                    >
                        {isOpen ? (
                            <GrClose className="w-6 h-6 text-main transitions hover:animate-wiggle" />
                        ) : (
                            <TbMenu className="w-6 h-6 text-main transitions hover:animate-wiggle" />
                        )}
                    </button>
                    <ul
                        className={`${
                            isOpen ? 'flex' : 'hidden'
                        }  z-50 bg-white p-3 rounded-sm border  lg:flex text-xl font-medium absolute flex flex-col right-4 top-12 gap-y-2 `}
                    >
                        <Link
                            href="/"
                            className="navbar-sm-links"
                            onClick={closeMenu}
                        >
                            Keşfet
                        </Link>
                        <Link
                            href="/gallery"
                            className="navbar-sm-links"
                            onClick={closeMenu}
                        >
                            Galeri
                        </Link>
                        <Link
                            href="/contact"
                            className="navbar-sm-links"
                            onClick={closeMenu}
                        >
                            İletişim
                        </Link>
                    </ul>
                </div>

                <ul className="text-xl font-medium hidden lg:flex items-center gap-x-4 text-third">
                    <Link
                        href="/"
                        className="navbar-links  hover:text-slate-400"
                    >
                        Ana Sayfa
                    </Link>
                    <Link
                        href="/gallery"
                        className="navbar-links hover:text-slate-400"
                    >
                        Galeri
                    </Link>
                    <Link
                        href="/contact"
                        className="navbar-links px-8 py-1.5 border border-third hover:bg-third rounded hover:text-second"
                    >
                        İletişim
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
