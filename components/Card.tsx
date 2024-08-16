import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
interface CardProps {
  item ?:any
  index?:any
 }
const Card = ({item,index}:CardProps) => {
  // console.log(item.data)
  const { artists,coverArt,date,name,uri } = item.data;
  const ids = uri.replace("spotify:album:","");
  console.log(name)

  
  return (
    <div key={index} className="bg-transparent shadow-lg rounded-lg overflow-hidden">
    <Image priority={index ===42} className='object-cover w-full h-64'
    // src=""
    src={coverArt.sources[0].url} 
    alt="Album Cover" width={500} height={200}  />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">
                  {name}
                  </h2>
                <p className="text-gray-600">
                {artists.items[0].profile.name}
                </p>
                <Link href={`albums/${ids}`} className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Play All</Link>
            </div>
        </div>
  )
}

export default Card