export type ImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export const Image = ({ src, alt, className }: ImageProps) => {
  return (
    <div className={`flex aspect-square justify-center overflow-hidden ${className}`}>
      {/** biome-ignore lint/performance/noImgElement: img benötigt für native Attribute */}
      <img src={src} alt={alt} />
    </div>
  );
};
