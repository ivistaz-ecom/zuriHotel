import React from 'react'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'
import MansoonIndulgencePackagesBanner from './MansoonIndulgencePackagesBanner'
import MonsoonIndulgencePackageWordpress from './MonsoonIndulgencepackageWordpress'

const index = () => {
    return (
        <>
            <Header />

            <MansoonIndulgencePackagesBanner />
            <MonsoonIndulgencePackageWordpress />
            <Footer />
        </>
    )
}

export default index