'use client'

import { CldImage } from 'next-cloudinary'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback } from 'react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'

const Header = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
    const slides = [
        { src: '10', alt: 'Maun Home 1' },
        { src: '60', alt: 'Maun Home 2' },
        { src: '51', alt: 'Maun Home 3' },
        { src: '55', alt: 'Maun Home 4' },
    ]

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div>
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((slide, index) => (
                        <div key={index} className="embla__slide">
                            <CldImage
                                width="1920"
                                height="1080"
                                src={slide.src}
                                alt={slide.alt}
                                className="mx-auto w-[1920] h-screen object-cover relative"
                            />
                        </div>
                    ))}
                </div>
                <div className="hidden absolute bottom-96 ml-4 lg:bottom-20 lg:right-48 lg:flex gap-x-3 lg:gap-x-5">
                    <div className="group cursor-pointer">
                        <div className="border bg-third group-hover:bg-second p-4 lg:p-6 relative rotate-45"></div>
                        <BiLeftArrowAlt
                            className="w-8 h-8 lg:w-12 lg:h-12 absolute bottom-0.5 text-second group-hover:text-main"
                            onClick={scrollPrev}
                        />
                    </div>

                    <div className="group cursor-pointer">
                        <div className="border bg-third group-hover:bg-second p-4 lg:p-6 relative rotate-45"></div>
                        <BiRightArrowAlt
                            className="w-8 h-8 lg:w-12 lg:h-12 absolute bottom-0.5 text-second group-hover:text-main"
                            onClick={scrollNext}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
