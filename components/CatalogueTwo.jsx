'use client'

import { CldImage } from 'next-cloudinary'
import Link from 'next/link'

const CatalogueTwo = () => {
    const photos = [
        { src: '54', alt: 'Maun Home' },
        { src: '35', alt: 'Maun Home' },
        { src: '25', alt: 'Maun Home' },
        { src: '43', alt: 'Maun Home' },
        { src: '13', alt: 'Maun Home' },
        { src: '24', alt: 'Maun Home' },
        { src: '15', alt: 'Maun Home' },
        { src: '16', alt: 'Maun Home' },
    ]
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-4 mt-16 max-w-7xl mx-auto">
                {photos.map((photo, index) => (
                    <div key={index}>
                        <CldImage
                            width="1280"
                            height="720"
                            src={photo.src}
                            alt={photo.alt}
                            className="mx-auto  object-cover cursor-zoom-in w-64 h-64 mb-16 border rounded-lg hover:shadow-2xl border-third hover:opacity-50 shadow-lg"
                        />
                    </div>
                ))}
            </div>

            <h5 className="p-2.5 font-semibold text-lg border-2 text-center cursor-pointer w-56  border-third rounded text-third mx-auto hover:bg-third hover:text-second">
                <Link href="/gallery">Tümünü Gör</Link>
            </h5>
        </div>
    )
}

export default CatalogueTwo
