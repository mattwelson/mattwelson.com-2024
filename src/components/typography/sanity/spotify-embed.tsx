import * as React from "react";

export function SpotifyEmbed({ value: { url } }: { value: { url: string } }) {
  return (
    <div className="-mx-8">
      <iframe
        className="mb-4 rounded-xl"
        src={`${url}?utm_source=generator&t=0`}
        width="100%"
        height="232"
        allowFullScreen={false}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      />
    </div>
  );
}
