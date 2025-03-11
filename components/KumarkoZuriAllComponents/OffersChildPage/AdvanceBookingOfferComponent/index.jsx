import React from 'react'

import AdvanceBookingBanner from './AdvanceBookingBanner'
import AdvanceBookingContent from './AdvanceBookingContent'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'
import NextSeo from '@/components/SeoComponents/Seo'

const title = "";
const description = "";
const path = "https://www.thezurihotels.com/lake-resorts-in-kumarakom/offers/advance-booking-offer/";
const metaImage = "/stay_offers/advance_booking_banner.jpg";

const index = () => {
  return (
    <>

      <NextSeo title={title} description={description} path={path} metaImage={metaImage} />

      <Header />
      <AdvanceBookingBanner />
      <AdvanceBookingContent />
      <Footer />
    </>
  )
}

export default index