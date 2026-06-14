export interface boss {
  name: string;
  image: string;
  videoId?: string;
  extraVideos?: {
    title: string;
    videoId: string;
  }[];
}