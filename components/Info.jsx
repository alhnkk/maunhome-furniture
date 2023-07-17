import Link from 'next/link'
import { BiPhone } from 'react-icons/bi'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const Info = () => {
    return (
        <div className="bg-third text-second">
            <div className="info-style">
                <Link
                    href="tel:04522321111"
                    className="hover:text-blue-100 flex items-center"
                >
                    <BiPhone className="mr-1.5 w-6 h-6" />
                    0452 232 1111
                </Link>

                <ul className="info-list">
                    <Link
                        href="https://instagram.com/maunhomebambu"
                        className="hover:text-pink-600 transitions"
                        target="_blank"
                    >
                        <FaInstagram className="w-5 h-5" />
                    </Link>

                    <Link
                        href="https://www.facebook.com/MAUNHOMEDESIGN"
                        className="hover:text-blue-600 transitions"
                        target="_blank"
                    >
                        <FaFacebook className="w-5 h-5" />
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Info
