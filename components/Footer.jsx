import Link from 'next/link'
import React from 'react'
import { BiMailSend } from 'react-icons/bi'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import divider1 from '../public/56.png'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="relative bg-second pt-8 pb-6 my-4 lg:my-16 ">
            <Image src={divider1} width={1000} className="mx-auto my-16" />
            <div className="container mx-auto px-4 max-w-7xl mt-4">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <h5 className="text-3xl fonat-semibold text-third">
                            Doğadan Gelen Konforunuz...
                        </h5>

                        <div className="flex mt-6 lg:mb-0 mb-6 gap-x-5 text-third">
                            <div className="rounded-full p-3 shadow-xl cursor-pointer  hover:text-pink-500">
                                <Link
                                    href="https://instagram.com/maunhomebambu"
                                    target="_blank"
                                >
                                    <FaInstagram className="w-5 h-5 rounded-full" />
                                </Link>
                            </div>
                            <div className="rounded-full p-3 shadow-xl cursor-pointer hover:text-blue-500">
                                <Link
                                    href="https://www.facebook.com/MAUNHOMEDESIGN"
                                    target="_blank"
                                >
                                    <FaFacebook className=" w-5 h-5 rounded-full" />
                                </Link>
                            </div>
                            <div className="rounded-full p-3 shadow-xl cursor-pointer hover:text-slate-600">
                                <BiMailSend className=" w-5 h-5 rounded-full" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4 text-third">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <h5 className="block  text-sm font-semibold mb-2">
                                    LİNKLER
                                </h5>
                                <ul className="flex flex-col">
                                    <Link href="/">Ana Sayfa</Link>
                                    <Link href="/gallery">Galeri</Link>
                                    <Link href="/contact">İletişim</Link>
                                    <Link href="#">Mail</Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-blueGray-300 text-third" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <h5 className="text-sm text-third font-semibold py-1">
                            Maun Home © <span id="get-current-year">2023</span>
                        </h5>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
