import Video from 'next-video';
import myVideo from "../../videos/video1.mp4"
 
export default function Page() { 
   return <Video src={myVideo} />;
}