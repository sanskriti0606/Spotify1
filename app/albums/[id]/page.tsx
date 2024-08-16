"use client";
import Loader from "../../../components/Preloader";
import TrackList from "../../../components/TrackList";
import React from "react";
import Image from "next/image";
import { useGetAlbumQuery } from "../../../redux/services/rapidapiCore";
const Page = ({ params }: any) => {
  const ids = params.id;
  const { data, isFetching, error } = useGetAlbumQuery(ids);
  if (isFetching)
    return (
      <>
        <Loader />
      </>
    );
  if (error) return <div>Error Occured</div>;
  const album = data?.albums[0];

  const {
    album_type,
    artists,
    copyrights,
    images,
    label,
    name,
    popularity,
    release_date,
    total_tracks,
    tracks,
  } = album;

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl  mx-auto text-center">
          <h2 className="text-3xl font-semibold text-dark">{name}</h2>
          <Image
            src={images[0].url}
            alt="Album Cover"
            width={64}
            height={64}
            className="rounded-full mx-auto"
          />
          <h1 className="text-4xl font-bold text-dark mt-8">{label} </h1>

          {artists?.map((item: any, index: any) => (
            <p className="text-lg text-dark mt-4" key={index}>
              {item.name}
            </p>
          ))}
          <div className="flex justify-center mt-8">
            {/* <button className="bg-dark text-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-blue-600 hover:text-dark">Play</button> */}
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl text-dark font-bold mb-4">Tracklist</h2>
          <ul>
            {tracks.items?.map((item: any, index: any) => (
              <TrackList item={item} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
{
  /* <body className="bg-gray-100">
<header className="bg-white shadow">
  <div className="container mx-auto px-4 py-4">
    <h1 className="text-2xl font-semibold text-gray-800">Album Details</h1>
  </div>
</header>

<main className="container mx-auto px-4 py-6 mt-8">
  <div className="flex flex-wrap -mx-4">
    <div className="w-full lg:w-1/2 px-4 mb-8">
      <img src="album-cover.jpg" alt="Album Cover" className="rounded-lg"/>
    </div>
    <div className="w-full lg:w-1/2 px-4 mb-8">
      <h2 className="text-3xl font-semibold text-gray-800">Album Title</h2>
      <h3 className="text-xl font-semibold text-gray-600">Artist Name</h3>
      <p className="text-gray-700 mb-4">Release Date: May 30, 2023</p>
      <h4 className="text-lg font-semibold text-gray-800 mb-2">Tracklist</h4>
      <ul className="list-disc list-inside">
        <li>Track 1</li>
        <li>Track 2</li>
        <li>Track 3</li>
        {/* <!-- Add more tracks as needed --> */
}
//       </ul>
//     </div>
//   </div>
// </main>

// <footer className="bg-gray-200">
//   <div className="container mx-auto px-4 py-4 text-center">
//     <p className="text-gray-600">&copy; 2023 Your Company. All rights reserved.</p>
//   </div>
// </footer>
// </body> */}
