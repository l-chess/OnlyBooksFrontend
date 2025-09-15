/** biome-ignore-all lint/performance/noImgElement: <explanation> */
export type ImageProps = {
  src: string;
  alt: string;
  className: string;
};

export const Image = ({ src, alt, className }: ImageProps) => {
  return (
    <div className={`flex aspect-square justify-center overflow-hidden ${className}`}>
      <img src={src} alt={alt} />
    </div>
  );
};
