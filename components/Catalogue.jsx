'use client'

import { CldImage } from 'next-cloudinary'
import divider1 from '../public/56.png'
import Image from 'next/image'
import Link from 'next/link'

const Catalogue = () => {
    const bahceci = [
        // { src: '1_pvwmdp', alt: 'Bahçeci 1' },
        { src: '69', alt: 'Bahçeci 2' },
        // { src: '3_wedsdd', alt: 'Bahçeci 3' },
        { src: '73', alt: 'Bahçeci 4' },
        { src: '71', alt: 'Bahçeci 6' },
        { src: '72', alt: 'Bahçeci 5' },
    ]

    return (
        <div>
            <div className="mt-16">
                <h5 className="text-third p-3 text-xl z-50 text-center">
                    Bahçeci Garden Furniture
                </h5>
                <Image src={divider1} className="mx-auto" width={250} />
            </div>
            <div className="grid mx-8 grid-cols-1 lg:grid-cols-2 max-w-7xl lg:mx-auto my-8">
                <div>
                    <CldImage
                        width="1280"
                        height="600"
                        src="123_p0uaoy"
                        className="relative"
                    />
                </div>
                <div className="grid grid-cols-2">
                    {bahceci.map((item, index) => (
                        <div key={index} className="embla__slide">
                            <CldImage
                                width="300"
                                height="300"
                                src={item.src}
                                alt={item.alt}
                                className="mx-auto w-full object-contain cursor-zoom-in"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Catalogue
