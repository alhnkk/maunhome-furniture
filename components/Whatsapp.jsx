'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { BsWhatsapp } from 'react-icons/bs'

const Whatsapp = () => {
    const [showText, setShowText] = useState(false)

    const handleHover = () => {
        setShowText(true)
    }

    const handleLeave = () => {
        setShowText(false)
    }

    return (
        <Link
            href="https://wa.me/5417958656"
            className="bg-green-500 items-center  flex rounded-full fixed z-10 
            bottom-10 left-10 cursor-pointer hover:bg-green-600 hover:text-slate-50 text-slate-200"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            target="_blank"
        >
            <BsWhatsapp className="w-12 h-12 p-2.5 z-10" />
            {showText && (
                <h4 className="bg-green-600  z-1 left-5 bottom-0.5 animate-slide-in font-bold pr-5 rounded-full">
                    Bize ulaş
                </h4>
            )}
        </Link>
    )
}

export default Whatsapp
