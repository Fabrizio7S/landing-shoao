export interface Boss {
  name: string;
  image: string;
  videoId?: string;
  guideUrl?: string;
  extraVideos?: {
    title: string;
    videoId: string;
  }[];
}