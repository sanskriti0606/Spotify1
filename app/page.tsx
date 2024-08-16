"use client";
import Card from "../components/Card";
import { useGetLatestAlbumQuery } from "../redux/services/rapidapiCore";

import Loader from "@/components/Preloader";

export default async function Home() {
  const { data, isFetching, error } =
    useGetLatestAlbumQuery("Bollywood Top 10");
  const Top10Latest = data?.albums.items;
  console.log(Top10Latest);
  if (isFetching)
    return (
      <>
        <Loader />
      </>
    );
  if (error) return <div>error</div>;

  return (
    <div className="bg-white py-16">
      <div className="container  mx-auto py-8">
        <h1 className="text-3xl text-dark  font-bold mb-4">Trending Albums</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Top10Latest?.map((item: any, index: any) => (
            <Card item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
