'use client'

import { CldImage } from 'next-cloudinary'
import divider1 from '../public/56.png'
import Image from 'next/image'

const About = () => {
    return (
        <div>
            <div className="my-2">
                <h5 className="text-third p-3 text-xl z-50 text-center">
                    Hakkımızda
                </h5>
                <Image src={divider1} className="mx-auto" width={250} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 mx-4 lg:mx-auto max-w-7xl ">
                <div>
                    <CldImage
                        width="1280"
                        height="600"
                        src="3_mkluw8"
                        className="relative"
                    />
                </div>
                <div className="about-content">
                    <h5 className="text-third  mt-16">Biz Kimiz</h5>
                    <h4 className=" text-third  text-3xl my-3">
                        KONFOR VE ŞIKLIĞIN ZİRVESİ
                    </h4>
                    <h5 className="text-lg mt-8">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Sed, facere quasi possimus recusandae deleniti
                        aperiam, nemo quisquam blanditiis commodi consequuntur
                        magnam sit asperiores adipisci veritatis tempora, labore
                        consequatur reiciendis a inventore? Voluptas
                        voluptatibus labore perspiciatis corporis dolorum esse
                        reprehenderit incidunt.
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default About
