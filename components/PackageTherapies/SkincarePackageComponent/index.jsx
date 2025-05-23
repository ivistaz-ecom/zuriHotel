import React from 'react'

import SkincareBanner from './SkincareBanner'
import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'
import '../../StyledComponents'
import SkincareContentWordpress from './SkinkareContentWordpress'
import NextSeo from '@/components/SeoComponents/Seo'

const title = "Ayurvedic Skin Care Treatment in Kumarakom | Lakeside Beauty Programme | Zuri Hotels";
const description = "Rejuvenate naturally with our Ayurvedic skin care treatment in Kumarakom, set by the tranquil Vembanad Lake. Discover one of the finest lakeside resorts with Ayurvedic treatments in Kumarakom, offering personalised beauty and wellness programmes in a serene, luxurious setting.";
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