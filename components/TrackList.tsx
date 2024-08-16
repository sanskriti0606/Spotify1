interface TrackProps {
  item?: any;
  index?: any;
}
import React from "react";
import AudioPlayer from "./AudioPlayer";

const TrackList = ({ item, index }: TrackProps) => {
  const { artists, external_urls, track_number, name, preview_url } = item;
  console.log(item);
  console.log(index);
  return (
    <li
      key={index}
      className="flex items-center justify-between py-4 border-b border-gray-400"
    >
      <div className="flex items-center">
        <span className="text-dark mr-4">{track_number}.</span>
        <div>
          <h3 className="text-dark font-bold">{name}</h3>

          {artists?.map((item: any, index: any) => (
            <p className="text-dark" key={index}>
              {item.name}
            </p>
          ))}
        </div>
      </div>

      {/* <a href="" className="text-blue-500 hover:text-blue-300">Play</a> */}
      <AudioPlayer preview_url={preview_url} />
    </li>
  );
};

export default TrackList;
