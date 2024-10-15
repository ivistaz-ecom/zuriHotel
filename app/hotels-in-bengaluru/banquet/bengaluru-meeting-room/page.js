import React from 'react'
import Image from 'next/image'

const BengaluruMeetingRoom = () => {
    return (
        <div className="container-fluid p-0 m-0">
            <div className="d-flex justify-content-center align-items-center">
                 <Image 
                    className="w-100 lg:h-full h-screen" 
                    width={900} 
                    height={600} 
                    src="/bengaluru/banquet/bengaluru-img.jpeg" 
                    alt="Banquet Banner"
                    style={{width:'100% !important',height:'100% !important'}}
                />
            </div>
        </div>
    )
}

export default BengaluruMeetingRoom
