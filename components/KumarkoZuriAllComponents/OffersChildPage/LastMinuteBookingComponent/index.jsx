import React from 'react'

import LastMinuteBanner from './LastMinuteBanner'
import LastMinuteContent from './LastMinuteContent'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

import Seo from '../../../SeoComponents/Seo'


const title = "";
const description = "";
const path = "https://www.thezurihotels.com/lake-resorts-in-kumarakom/offers/last-minute-offer/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>
      <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />
      <LastMinuteBanner />
      <LastMinuteContent />
      <Footer />
    </>
  )
}

export default index