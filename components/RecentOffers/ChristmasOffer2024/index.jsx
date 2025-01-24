import React from 'react'
import ChristmasBanner from './ChristmasBanner'
import Header from '../../../components/Shared/Header'
import Footer from '../../../components/Shared/Footer'
import ChristmaContactForm from '../../Forms/ChristmasNewYear2024Form'
import NextSeo from '@/components/SeoComponents/Seo'


const title = "valentines day offers at Zuri";
const description = "Celebrate your holidays with Zuri. Book your stay and make it a memorable holiday season.";
const path = "https://www.thezurihotels.com/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>

            <NextSeo title={title} description={description} path={path} metaImage={metaImage} />

            <Header />
            <ChristmasBanner />
            <ChristmaContactForm />
            <Footer />
        </>
    )
}

export default index
