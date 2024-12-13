import React from 'react'
import ChristmasBanner from './ChristmasBanner'
import Header from '../../../components/Shared/Header'
import Footer from '../../../components/Shared/Footer'
import ChristmaContactForm from '../../Forms/ChristmasNewYear2024Form'

const index = () => {
    return (
        <>
            <Header />
            <ChristmasBanner />
            <ChristmaContactForm />
            <Footer />
        </>
    )
}

export default index
