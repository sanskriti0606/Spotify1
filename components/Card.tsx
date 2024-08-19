// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';

// interface CardProps {
//   item?: any;
//   index?: any;
// }

// const Card = ({ item, index }: CardProps) => {
//   const { artists, coverArt, date, name, uri } = item.data;
//   const ids = uri.replace("spotify:album:", "");

//   return (
//     <div key={index} className="bg-[#181818] rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
//       <Image
//         priority={index === 42}
//         className="object-cover w-full h-64"
//         src={coverArt.sources[0].url}
//         alt="Album Cover"
//         width={500}
//         height={500}
//       />
//       <div className="p-4">
//         <h2 className="text-lg font-bold text-white truncate">{name}</h2>
//         <p className="text-sm text-gray-400 truncate">{artists.items[0].profile.name}</p>
//         <Link href={`/albums/${ids}`} className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">
//           Play
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Card;

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CardProps {
  item: any;
}

const Card = ({ item }: CardProps) => {
  const { name, images, id } = item;

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <Image src={images[0].url} alt={name} width={500} height={500} />
      <div className="p-4">
        <h3 className="text-white text-lg font-bold">{name}</h3>
        <Link href={`/albums/${id}`}>
          <a className="text-blue-400 mt-2 block">View Album</a>
        </Link>
      </div>
    </div>
  );
};

export default Card;

