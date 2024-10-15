import React from 'react'
// import Image from 'next/image'

const ImageLists = [
{imgUrl:'/banquetBengaluru001.jpg'},
{imgUrl:'/banquetBengaluru002.jpg'},
{imgUrl:'/banquetBengaluru003.jpg'},
{imgUrl:'/banquetBengaluru004.jpg'},
{imgUrl:'/banquetBengaluru005.jpg'},

]



const BanquetImage = () => {
    return (
        <div className="container-fluid p-0 m-0">
            <div className="d-flex justify-content-center align-items-center">
                {ImageLists.map((items,index)=>(

<img 
className="w-100 h-100" 
width={900} 
height={600} 
src={items.imgUrl} 
alt="Banquet Banner"
style={{width:'100% !important',height:'100% !important'}}
key={index}
/>

                ))}
               
             
               
            </div>
        </div>
    )
}

export default BanquetImage
