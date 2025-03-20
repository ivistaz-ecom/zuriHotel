import React from 'react'
import SpiritualRetreatBanner from './SpiritualRetreatBanner'
import SpiritualRetreatContent from './SpiritualRetreatContent'
import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

const index = () => {
    return (
        <div>
            <Header />
            <SpiritualRetreatBanner />
            <SpiritualRetreatContent />
            <Footer />
        </div>
    )
}

export default index