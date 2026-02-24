import { useState } from 'react';

interface ImageSkeletonProps {
  src?: string | undefined;
  alt: string;
  className?: string;
  objectFit?: 'cover' | 'contain';
  onClick?: () => void;
}

const ImageSkeleton = ({ src, alt, className = '', objectFit = 'cover', onClick }: ImageSkeletonProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className} ${src ? '' : ''}`} onClick={onClick}>
      {(!src || !loaded) && <div className="absolute inset-0 shimmer-bg" />}
      {src && (
        <img
          src={src}
          alt={alt}
          className={`absolute inset-0 w-full h-full ${objectFit === 'contain' ? 'object-contain' : 'object-cover'} border-none transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setLoaded(true)}
          onError={() => {}}
        />
      )}
    </div>
  );
};

export default ImageSkeleton;
