
import speaker489 from "@assets/speaker_picture/489.png";
import speaker478 from "@assets/speaker_picture/478.jpeg";
import speaker504 from "@assets/speaker_picture/504.jpeg";
import speaker500 from "@assets/speaker_picture/500.png";

export const featuredSessionIds = [
   371, 390, 397
];
export const sessionListApiUrl = "https://events.canonical.com/export/event/47.json?detail=contributions&pretty=yes:";
export const sessionListUrl = "https://events.canonical.com/event/47/contributions/";
interface ImageMapType {
    [key: string]: ImageMetadata
  };

export const speakerPersonIdPictureMap: ImageMapType = {
    k489: speaker489,
    k478: speaker478,
    k504: speaker504,
    k500: speaker500
}