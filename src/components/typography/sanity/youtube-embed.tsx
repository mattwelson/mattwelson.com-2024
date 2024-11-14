import getYouTubeId from "get-youtube-id";

export function YoutubeEmbed({ value: { url } }: { value: { url: string } }) {
  const id = getYouTubeId(url);
  return (
    <iframe
      className="mx-auto col-start-1"
      width="800"
      height="500"
      src={`https://www.youtube.com/embed/${id}?si=O4GR7UResfLW0XeI`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
}
