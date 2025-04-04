import React from 'react'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'
import WinterGetAwayAPPackagesBanner from './WinterGetAwayApPackagesBanner'
import WinterGetAwayAPContentWordpress from './WinterGetAwayAPContentWordpress'

const index = () => {
    return (
        <>
            <Header />

            <WinterGetAwayAPPackagesBanner />
            <WinterGetAwayAPContentWordpress />

            <Footer />
        </>
    )
}

export default index