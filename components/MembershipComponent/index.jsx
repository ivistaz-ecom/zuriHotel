import React from 'react'

import MembershipBanner from './MembershipBanner'
import MembershipContent from './MembershipContent'

import Header from '../Shared/Header'
import Footer from '../Shared/Footer'

import '../StyledComponents'
import NextSeo from '../SeoComponents/Seo'

const title = "Best Ayurvedic & Wellness Resorts in Kerala, India - Zuri";
const description = "Busy life? Take a well-deserved break and check into one of the best Ayurveda resorts in Kerala. Give your worries and daily stress a vacation.Come out rejuvenated.";
const path = "https://www.thezurihotels.com/offers/ayurveda-package/		";
const metaImage = "/zuri_logo_social_media.png";


const index = () => {
  return (
    <>
      <NextSeo title={title} description={description} path={path} metaImage={metaImage} />

      <Header />
      <MembershipBanner/>
      <MembershipContent/>
      <Footer />
    </>
  )
}

export default index