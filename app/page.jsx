import Header from '@components/Header'
import Title from '@components/Title'
import FurnitureGroup from '@components/FurnitureGroup'
import About from '@components/About'
import Catalogue from '@components/Catalogue'
import CatalogueTwo from '@components/CatalogueTwo'
import Instagram from '@components/Instagram'
import Testimonials from '@components/Testimonials'

const Home = () => {
    return (
        <div>
            <Header />
            <Title />
            <FurnitureGroup />
            <About />
            <Catalogue />
            <Instagram />
            <CatalogueTwo />
            <Testimonials />
        </div>
    )
}

export default Home
