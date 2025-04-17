export default function useVideoToIframe(video_path: string) {
  if (video_path.indexOf("watch?")) {
    video_path = video_path.split("watch?")[1];
    video_path = video_path.split("&")[0];
    video_path = video_path.split("=")[1];
    video_path = `https://www.youtube.com/embed/${video_path}`;
    return video_path;
  }
  return video_path;
}
