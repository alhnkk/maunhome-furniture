'use client'

import { CldImage } from 'next-cloudinary'
import { useState } from 'react'

const Gallery = () => {
    const [visiblePhotos, setVisiblePhotos] = useState(20)

    const gallery = [
        { src: '1', alt: 'Maun Home 1' },
        { src: '2', alt: 'Maun Home 2' },
        { src: '3', alt: 'Maun Home 3' },
        { src: '4', alt: 'Maun Home 4' },
        { src: '5', alt: 'Maun Home 5' },
        { src: '6', alt: 'Maun Home 6' },
        { src: '7', alt: 'Maun Home 7' },
        { src: '8', alt: 'Maun Home 8' },
        { src: '9', alt: 'Maun Home 9' },
        { src: '10', alt: 'Maun Home 10' },
        { src: '11', alt: 'Maun Home 11' },
        { src: '12', alt: 'Maun Home 12' },
        { src: '13', alt: 'Maun Home 13' },
        { src: '14', alt: 'Maun Home 14' },
        { src: '15', alt: 'Maun Home 15' },
        { src: '16', alt: 'Maun Home 16' },
        { src: '17', alt: 'Maun Home 17' },
        { src: '18', alt: 'Maun Home 18' },
        { src: '19', alt: 'Maun Home 19' },
        { src: '20', alt: 'Maun Home 20' },
        { src: '21', alt: 'Maun Home 21' },
        { src: '22', alt: 'Maun Home 22' },
        { src: '23', alt: 'Maun Home 23' },
        { src: '24', alt: 'Maun Home 24' },
        { src: '25', alt: 'Maun Home 25' },
        { src: '26', alt: 'Maun Home 26' },
        { src: '27', alt: 'Maun Home 27' },
        { src: '28', alt: 'Maun Home 28' },
        { src: '29', alt: 'Maun Home 29' },
        { src: '30', alt: 'Maun Home 30' },
        { src: '31', alt: 'Maun Home 31' },
        { src: '32', alt: 'Maun Home 32' },
        { src: '33', alt: 'Maun Home 33' },
        { src: '34', alt: 'Maun Home 34' },
        { src: '35', alt: 'Maun Home 35' },
        { src: '36', alt: 'Maun Home 36' },
        { src: '37', alt: 'Maun Home 37' },
        { src: '38', alt: 'Maun Home 38' },
        { src: '39', alt: 'Maun Home 39' },
        { src: '40', alt: 'Maun Home 40' },
        { src: '41', alt: 'Maun Home 41' },
        { src: '42', alt: 'Maun Home 42' },
        { src: '43', alt: 'Maun Home 43' },
        { src: '44', alt: 'Maun Home 44' },
        { src: '45', alt: 'Maun Home 45' },
        { src: '46', alt: 'Maun Home 46' },
        { src: '47', alt: 'Maun Home 47' },
        { src: '48', alt: 'Maun Home 48' },
        { src: '49', alt: 'Maun Home 49' },
        { src: '50', alt: 'Maun Home 50' },
        { src: '51', alt: 'Maun Home 51' },
        { src: '52', alt: 'Maun Home 52' },
        { src: '53', alt: 'Maun Home 53' },
        { src: '54', alt: 'Maun Home 54' },
        { src: '55', alt: 'Maun Home 55' },
        { src: '56', alt: 'Maun Home 56' },
        { src: '57', alt: 'Maun Home 57' },
        { src: '58', alt: 'Maun Home 58' },
        { src: '59', alt: 'Maun Home 59' },
        { src: '60', alt: 'Maun Home 60' },
        { src: '61', alt: 'Maun Home 61' },
        { src: '62', alt: 'Maun Home 62' },
        { src: '63', alt: 'Maun Home 63' },
        { src: '64', alt: 'Maun Home 64' },
        { src: '65', alt: 'Maun Home 65' },
        { src: '66', alt: 'Maun Home 66' },
        { src: '67', alt: 'Maun Home 67' },
        { src: '68', alt: 'Maun Home 68' },
        { src: '69', alt: 'Maun Home 69' },
    ]
    const handleShowMore = () => {
        setVisiblePhotos((prevVisiblePhotos) => prevVisiblePhotos + 10)
    }

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 container px-8 mx-auto max-w-7xl">
                {gallery.slice(0, visiblePhotos).map((item, index) => (
                    <div key={index} className="embla__slide">
                        <CldImage
                            width={1280}
                            height={720}
                            crop="fill"
                            src={item.src}
                            alt={item.alt}
                            className="mx-auto w-full object-contain cursor-zoom-in"
                        />
                    </div>
                ))}
            </div>
            {visiblePhotos < gallery.length && (
                <button
                    className="my-16 p-2.5 font-semibold text-lg border-2 text-center cursor-pointer border-third rounded text-third
                     mx-auto block hover:bg-third hover:text-second"
                    onClick={handleShowMore}
                >
                    Daha Fazla Göster
                </button>
            )}
        </div>
    )
}

export default Gallery
