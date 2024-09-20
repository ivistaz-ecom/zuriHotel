import React from 'react'

import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import CustomerReview from './CustomerReview'
import NextSeo from '../SeoComponents/Seo'

const title = "Guest Reviews: The Zuri Experience";
const description = "From luxurious accommodations to exceptional dining, The Zuri offers it all. Explore our guest reviews and discover why we're a top choice for travelers.";
const path = "https://www.thezurihotels.com/customer-review";
const metaImage = "/zuri_logo_social_media.png";


const index = () => {
    return (
        <>
         <NextSeo title={title} description={description} path={path} metaImage={metaImage} />
            <Header />
            <CustomerReview />
            <Footer />
        </>
    )
}

export default index