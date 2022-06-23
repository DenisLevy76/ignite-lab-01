export const VideoComponent: React.FC<{ videoId: string }> = ({ videoId }) => {
  return (
    <div className="flex-1 h-[31.25rem] 2xl:h-[38.5rem]">
      <iframe
        className="h-[31.25rem] 2xl:h-[38.5rem] w-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
