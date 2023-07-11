import Image from 'next/image'
import divider1 from '../public/56.png'

const Title = () => {
    return (
        <div className="lg:mt-20 lg:mb-28 text-center">
            <div>
                <div class="relative py-4">
                    <div class="relative flex justify-center">
                        <h3 className="text-lg text-third lg:text-2xl z-50 text-transparent bg-clip-text bg-gradient-to-r from-third via-indigo-500 to-blue-500">
                            MAUN HOME
                        </h3>
                    </div>
                </div>

                <Image src={divider1} className="mx-auto" width={600} />
                <h5 className="text-3xl lg:text-5xl italic mt-4 tracking-wider text-third">
                    Herkesin Zevkine Göre
                    <br /> Oturma Grupları
                </h5>
            </div>
        </div>
    )
}

export default Title
