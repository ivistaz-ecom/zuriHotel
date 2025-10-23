'use client'
import React from 'react'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'
import KumarkomHomeHeader from './KumarkomHomeHeader'
import HomeHeroBanner from './HomeHeroBanner'
import KumarkomResort from './KumarkomResort'

import '../../StyledComponents'
import KumarkomGallery from './KumarkomGallery'
import KumarkomHomePopup from './KumarkomHomePopup'
import WhatsAppWidgetKumarkom from './WhatsappWidgetKumarkom'
import WhatsappWidgetKumarkom from './WhatsappWidgetKumarkom'
import Seo from '../../SeoComponents/Seo'
import Head from 'next/head'

const title = "Luxury Backwater Resorts & Hotels in Kumarakom, Kerala - Zuri";
const description = "Experience the backwaters of Kerala from Zuri's luxury hotel and vembanad lake resort in Zuri Kumarakom Resorts. Revel in the beauty and splendor of Kumarakom, Kerala.";
const path = "https://www.thezurihotels.com/lake-resorts-in-kumarakom/";
const metaImage = "/zuri_logo_social_media.png";


const Kumarkom = () => {
    return (
        <>

            <Seo title={title} description={description} path={path} metaImage={metaImage} />

            <Header />

            <KumarkomHomeHeader />
            <HomeHeroBanner />
            <KumarkomResort />
            <KumarkomGallery />
            <KumarkomHomePopup />
            <WhatsappWidgetKumarkom />

            <Footer />
        </>
    )
}

export default Kumarkom