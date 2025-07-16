import Link from 'next/link'
import React from 'react'
import { Container, Image } from 'react-bootstrap'

const LimeTreeContent = () => {
    return (
        <>
            <Container className='p-0 text-center pt-5 px-md-4'>
                <Image src='/cl.png' alt='' fluid />
                <h6 className='py-2 pt-4 text-center'>LIME TREE – ALL-DAY DINING RESTAURANT IN KUMARAKOM</h6>
                <p className='text-center'>
                    Breathe in the fresh sea breeze that carries the exotic fragrance of Lime Tree’s array of exotic dishes ranging from regional favourites to classics and continental to Pan-Asian awash with soft lights and with a tranquil ambience cuisine. This all-day dining restaurant also offers a sumptuous buffet spread that will leave you completely satiated.
                </p>

                <p>
                    You can choose to sit under the wide expanse of the sky mirrored in the lagoon or sit inside the restaurant awash with soft lights and tranquil ambience.
                </p>
                <Link
                    href="/kumarkom/restarents/pdf/Lime_Tree_Menu.pdf"
                    target='_blank'>
                    <p className='bg-purple px-5 py-2 rounded-4 d-inline-block text-white'>
                        Menu
                    </p>
                </Link>
            </Container>
        </>
    )
}

export default LimeTreeContent