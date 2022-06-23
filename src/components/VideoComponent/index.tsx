import { DefaultUi, Player, Youtube } from "@vime/react";

import "@vime/core/themes/default.css";
import "@vime/core/themes/light.css";

export const VideoComponent: React.FC<{ videoId: string }> = ({ videoId }) => {
  return (
    <iframe
      className="h-[31.25rem] 2xl:h-[38.5rem]"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};
