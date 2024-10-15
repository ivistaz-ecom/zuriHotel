import React from 'react'
// import Image from 'next/image'

const BanquetImage = () => {
    return (
        <div className="container-fluid p-0 m-0">
            <div className="d-flex justify-content-center align-items-center">
                <img 
                    className="w-100 h-100" 
                    width={900} 
                    height={600} 
                    src="/banquetBengaluru001.jpg" 
                    alt="Banquet Banner"
                    style={{width:'100% !important',height:'100% !important'}}
                />
             
               
            </div>
        </div>
    )
}

export default BanquetImage
