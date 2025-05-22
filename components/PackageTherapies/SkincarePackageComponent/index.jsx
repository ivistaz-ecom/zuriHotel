import React from 'react'

import SkincareBanner from './SkincareBanner'
import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'
import '../../StyledComponents'
import SkincareContentWordpress from './SkinkareContentWordpress'
import NextSeo from '@/components/SeoComponents/Seo'

const title = "Rejuvenation Package: Resorts With Ayurvedic Rejuvenation Packages in Kerala, India - Zuri Hotels & Resorts	";
const description = "Is the hustle and bustle of daily life bogging you down? Take a break and visit the God's own country to relax and rejoice. Choose a viable rejuvenation package in Kerala and watch as your stress melts away at the end of the short getaway";
const path = "https://www.thezurihotels.com/lake-resorts-in-kumarakom/offers/skin-care-and-beauty-care-programme/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
  return (
    <>

      <NextSeo title={title} description={description} path={path} metaImage={metaImage} />

      <Header />
      <SkincareBanner />
      {/* <SkincareContent /> */}
      <SkincareContentWordpress />
      <Footer />
    </>
  )
}

export default index