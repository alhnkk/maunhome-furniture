'use client'

import { CldImage } from 'next-cloudinary'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import divider1 from '../public/56.png'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import { useCallback } from 'react'

const FurnitureGroup = () => {
    const [emblaRef] = useEmblaCarousel([Autoplay({ delay: 4000 })])
    const slides = [
        {
            src: 'berlin_kxlqva',
            alt: 'Maun Home Berlin Koltuk Takımı',
            className: 'mx-auto w-[500px] lg:w-full lg:px-6 pr-16',
            model: 'Berlin',
            model_cls: 'hidden lg:block',
        },
        {
            src: 'istanbul_hrabwo',
            alt: 'Maun Home İstanbul Koltuk Takımı',
            className: 'mx-auto w-full lg:px-6 pr-16 mt-4',
            model: 'İstanbul',
            model_cls: 'hidden lg:block',
        },
        {
            src: 'viana_lkjq8y',
            alt: 'Maun Home Viana Koltuk Takımı',
            className: 'mx-auto w-full lg:px-6 pr-16 mt-4',
            model: 'Viana',
            model_cls: 'hidden lg:block',
        },
        {
            src: 'londra_khfns7',
            alt: 'Maun Home Londra Koltuk Takımı',
            className: 'mx-auto w-full lg:px-6',
            model: 'Londra',
            model_cls: 'hidden lg:block',
        },
        {
            src: 'milano_kvvxs7',
            alt: 'Maun Home Milano Koltuk Takımı',
            className: 'mx-auto w-full lg:px-6',
            model: 'Milano',
            model_cls: 'hidden lg:block',
        },
        {
            src: 'paris_qjo9qs',
            alt: 'Maun Home Paris Koltuk Takımı',
            className: 'mx-auto w-full lg:px-6 pr-16 mt-4',
            model: 'Paris',
            model_cls: 'hidden lg:block',
        },
        {
            src: 'oslo_awtkfv',
            alt: 'Maun Home Oslo Koltuk Takımı',
            className: 'mx-auto w-[600px] lg:px-6 ',
            model: 'Oslo',
            model_cls: 'hidden lg:block',
        },
        {
            src: 'tokyo_vkt9i0',
            alt: 'Maun Home Tokya Koltuk Takımı',
            className: 'mx-auto w-full lg:px-6 pr-16 mt-4',
            model: 'Tokyo',
            model_cls: 'hidden lg:block',
        },
    ]

    return (
        <div>
            <div
                className="embla max-w-7xl lg:mx-auto my-16 lg:my-28 mx-8 "
                ref={emblaRef}
            >
                <div className="embla__container-2">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="embla__slide  bg-slate-200 ml-3 cursor-grab"
                        >
                            <CldImage
                                width="900"
                                height="600"
                                src={slide.src}
                                alt={slide.alt}
                                className={slide.className}
                            />
                            <h5
                                className={`text-center text-7xl opacity-25 text-third font-extrabold ${slide.model_cls} mb-16`}
                            >
                                {slide.model}
                            </h5>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FurnitureGroup
