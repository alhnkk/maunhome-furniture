import Image from 'next/image'
import divider1 from '../public/56.png'
import { IoIosStar, IoMdStarHalf } from 'react-icons/io'
import logo from '../public/logo.png'

const Testimonials = () => {
    return (
        <div>
            <div className="container my-24 mx-auto px-6 max-w-7xl">
                <section className="mb-32 text-center">
                    <h5 className="mb-12 text-3xl font-bold text-third">
                        Müşteri Yorumları
                        <Image src={divider1} className="mx-auto" width={300} />
                    </h5>

                    <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
                        <div className="mb-12 md:mb-0">
                            <div className="mb-6 flex justify-center">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
                                    className="w-32 rounded-full"
                                />
                            </div>
                            <h5 className="mb-2 text-lg font-bold text-third">
                                Ayşe K.
                            </h5>
                            <h6 className="mb-4 font-medium text-third">
                                Mimar
                            </h6>
                            <p className="mb-4 text-main">
                                Maun Home Bambu'dan aldığım ürünlerden çok
                                memnunum! Mobilyalar gerçekten harika ve
                                kaliteli. Hem doğal bir görünüme sahipler hem de
                                dayanıklılar. Siparişim hızlı bir şekilde eve
                                geldi ve ürünler paketlenmesiyle dikkatimi
                                çekti. Kesinlikle bu mağazayı tavsiye ederim.
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 96 960 960"
                                    className="inline-block w-6"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                                    />
                                </svg>
                            </p>
                            <ul className="mb-0 flex justify-center text-third">
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                            </ul>
                        </div>
                        <div className="mb-12 md:mb-0">
                            <div className="mb-6 flex justify-center">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg"
                                    className="w-32 rounded-full text-third"
                                />
                            </div>
                            <h5 className="mb-2 text-lg font-bold text-third">
                                Seda G.
                            </h5>
                            <h6 className="mb-4 font-medium text-third">
                                Ev Hanımı
                            </h6>
                            <p className="mb-4 text-main">
                                Maun Home Bambu, güzel bir alışveriş deneyimi
                                sunan harika bir mağaza. Terasım için ihtiyacım
                                olan mobilyaları burada buldum ve gerçekten çok
                                beğendim. Ürünler yüksek kaliteli ve kullanışlı.
                                Teşekkürler Maun Home Bambu!
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 96 960 960"
                                    className="inline-block w-6"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                                    />
                                </svg>
                            </p>
                            <div className="mb-0 flex justify-center text-third">
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                            </div>
                        </div>
                        <div className="mb-0">
                            <div className="mb-6 flex justify-center">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
                                    className="w-32 rounded-full text-third"
                                />
                            </div>
                            <h5 className="mb-2 text-lg font-bold text-third">
                                Erdem U.
                            </h5>
                            <h6 className="mb-4 font-medium text-third">
                                Gıda Mühendisi
                            </h6>
                            <p className="mb-4 text-main">
                                Bambu ürünleri seven biri olarak Maun Home Bambu
                                mağazası benim için doğru bir keşif oldu. Ürün
                                yelpazesi geniş ve çeşitli, bu yüzden ihtiyaç
                                duyduğum her şeyi bulabiliyorum. Ürünlerin
                                kalitesi harika. Mağaza sahipleri güvenilir ve
                                iletişimleri kuvvetli ve hızlı. Kesinlikle
                                favori mağazalarımdan biri haline geldi.
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 96 960 960"
                                    className="inline-block w-6"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                                    />
                                </svg>
                            </p>
                            <div className="mb-0 flex justify-center text-third">
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoMdStarHalf />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Image src={logo} width={300} className=" max-w-7xl mx-auto" />
        </div>
    )
}

export default Testimonials
