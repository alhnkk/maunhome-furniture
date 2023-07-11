import insta from '../public/insta.svg'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillFacebook, AiOutlineMail } from 'react-icons/ai'
const Instagram = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3      max-w-7xl mx-auto my-16 gap-y-8 lg:my-24">
            <Link
                href="https://instagram.com/maunhomebambu"
                target="_blank"
                className="flex items-center gap-x-2  mx-auto hover:bg-slate-200 lg:p-3 cursor-pointer"
            >
                <Image src={insta} width={60} height={60} />
                <h4 className="text-lg text-main font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
                    /maunhomebambu
                </h4>
            </Link>

            <Link
                href="https://www.facebook.com/MAUNHOMEDESIGN"
                target="_blank"
                className="flex items-center gap-x-2 mx-auto hover:bg-slate-200 lg:p-3 cursor-pointer"
            >
                <AiFillFacebook className="w-16 h-16 text-blue-600" />
                <h4 className="text-lg text-main font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-slate-500">
                    /MAUNHOMEDESIGN
                </h4>
            </Link>

            <Link
                href="mailto: abc@example.com"
                target="_blank"
                className="flex items-center gap-x-2 mx-auto hover:bg-slate-200 lg:p-3 cursor-pointer"
            >
                <AiOutlineMail className="w-16 h-16 text-slate-600" />
                <h4 className="text-lg text-main font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-gray-300 to-slate-500">
                    maunhome@gmail.com
                </h4>
            </Link>
        </div>
    )
}

export default Instagram
