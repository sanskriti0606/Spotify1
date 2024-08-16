import React,{useState,useRef}from 'react'
interface AudioPlayerProps {
    preview_url?:string;
}
const AudioPlayer = ({preview_url}:AudioPlayerProps) => {
    const [isPlaying,setIsPlaying] = React.useState(false)
    const audioRef = React.useRef<HTMLAudioElement>(null);
    const togglePlay = () => {
        if(isPlaying){
            audioRef.current?.pause();
        }else{
            audioRef.current?.play();
        } 
        setIsPlaying(!isPlaying);
    }
  return (
    <div>
        <audio ref={audioRef} src={preview_url} />
        <button onClick={togglePlay} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {isPlaying ? 'Pause' : 'Play'}
         </button>

    </div>
  )

}

export default AudioPlayer;