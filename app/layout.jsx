'use client'

import Footer from '@components/Footer'
import Info from '@components/Info'
import Navbar from '@components/Navbar'
import Whatsapp from '@components/Whatsapp'
import '@styles/globals.css'
import { Bitter } from 'next/font/google'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

const bitter = Bitter({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})
const metadata = {
    title: 'Doğadan Gelen Konforunuz...',
    description: 'Maun Home Resmi Tanıtım Sitesidir',
    favicon: '/maunicon.png',
}

export default function RootLayout({ children }) {
    return (
        <>
            <style jsx global>
                {`
                    html {
                        font-family: ${montserrat.style.fontFamily};
                    }

                    h5 {
                        font-family: ${bitter.style.fontFamily};
                    }
                `}
            </style>
            <html lang="en">
                <head>
                    <title>{metadata.title}</title>
                    <meta name="description" content={metadata.description} />
                    <link rel="icon" href={metadata.favicon} />
                </head>
                <body className={`bitter.className`}>
                    <Whatsapp />
                    <Info />
                    <Navbar />
                    <main className="app">{children}</main>
                    <Footer />
                    <script src="https://unpkg.com/embla-carousel-autoplay/embla-carousel-autoplay.umd.js"></script>
                </body>
            </html>
        </>
    )
}
