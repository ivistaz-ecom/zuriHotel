import React from 'react'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'
import DiningGoaHeader from './DiningGoaHeader'
import DiningGoaBanner from './DiningGoaBanner'
import DiningGoaContent from './DiningGoaContent'
import DiningGoaSlider from './DiningGoaSlider'
import DiningGoaOffers from './DiningGoaOffers'

import Seo from '../../SeoComponents/Seo'


const title = "Luxury 5 Star Restaurants in Goa - Zuri Hotels & Resorts";
const description = "Relish authentic Goan cuisine and the best of world cuisine at restaurants at The Zuri Whitesands, our resort in south Goa. Take home the taste of Goa.";
const path = "https://www.thezurihotels.com/beach-resorts-in-goa/restaurants/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>

      <Seo title={title} description={description} path={path} metaImage={metaImage} />

            <Header />

            <DiningGoaHeader />
            <DiningGoaBanner />
            <DiningGoaContent />
            <DiningGoaSlider />
            {/* <DiningGoaOffers /> */}

            <Footer />
        </>
    )
}

export default index
