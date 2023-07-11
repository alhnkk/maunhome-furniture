import Gallery from '@components/Gallery'
import Image from 'next/image'
import divider1 from '../../public/56.png'

const page = () => {
    return (
        <div>
            <h5 className="text-5xl text-center font-bold my-16 text-third">
                TÜM ÜRÜNLERİMİZ
                <Image src={divider1} className="mx-auto" width={600} />
            </h5>
            <Gallery />
        </div>
    )
}

export default page
