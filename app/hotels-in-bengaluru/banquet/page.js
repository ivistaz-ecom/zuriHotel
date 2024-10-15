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
                    src="/banquet_bengaluru_001.jpg" 
                    alt="Banquet Banner"
                    style={{width:'100% !important',height:'100% !important'}}
                />
               <Image
                    className="w-100 h-100" 
                    width={900} 
                    height={600} 
                    src="/banquet_bengaluru_002.jpg" 
                    alt="Banquet Banner"
                    style={{width:'100% !important',height:'100% !important'}}
                />
                 <Image
                    className="w-100 h-100" 
                    width={900} 
                    height={600} 
                    src="/banquet_bengaluru_003.jpg" 
                    alt="Banquet Banner"
                    style={{width:'100% !important',height:'100% !important'}}
                />
                 <Image
                    className="w-100 h-100" 
                    width={900} 
                    height={600} 
                    src="/banquet_bengaluru_004.jpg" 
                    alt="Banquet Banner"
                    style={{width:'100% !important',height:'100% !important'}}
                />
                 <Image
                    className="w-100 h-100" 
                    width={900} 
                    height={600} 
                    src="/banquet_bengaluru_005.jpg" 
                    alt="Banquet Banner"
                    style={{width:'100% !important',height:'100% !important'}}
                />
               





            </div>
        </div>
    )
}

export default BanquetImage
