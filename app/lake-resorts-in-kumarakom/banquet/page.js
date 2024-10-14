import React from 'react'
import Image from 'next/image'

const BanquetImage = () => {
    return (
        <div className="container-fluid p-0 m-0">
            <div className="d-flex justify-content-center align-items-center">
                <Image 
                    className="w-100 h-100" 
                    width={900} 
                    height={600} 
                    src="/kumarkom/banquet/winter-ap-2024-wp-banner.jpg" 
                    alt="Banquet Banner"
                    style={{width:'100% !important',height:'100% !important'}}
                />


<Image 
                    className="w-100 h-100" 
                    width={900} 
                    height={600} 
                    src="/kumarkom/banquet/winter-ap-banner-2024.jpg" 
                    alt="Banquet Banner"
                    style={{width:'100% !important',height:'100% !important'}}
                />
                 <Image 
                    className="w-100 h-100" 
                    width={900} 
                    height={600} 
                    src="/kumarkom/banquet/winter-gateway-package-map-2024-wp-banner.jpg" 
                    alt="Banquet Banner"
                    style={{width:'100% !important',height:'100% !important'}}
                />
                 <Image 
                    className="w-100 h-100" 
                    width={900} 
                    height={600} 
                    src="/kumarkom/banquet/winter-gateway-package-map-2024.jpg" 
                    alt="Banquet Banner"
                    style={{width:'100% !important',height:'100% !important'}}
                />
            </div>
        </div>
    )
}

export default BanquetImage
