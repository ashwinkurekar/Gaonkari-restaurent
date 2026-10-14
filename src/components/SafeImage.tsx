import React, { useState } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackText?: string;
  containerClassName?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  fallbackText,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden bg-[#201C19] ${containerClassName}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-[#35251F]/60 animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-[#D6A54D]/40 border-t-[#D6A54D] rounded-full animate-spin" />
        </div>
      )}
      {!hasError ? (
        <img
          src={src}
          alt={alt || 'Gaonkari Restaurant'}
          referrerPolicy="no-referrer"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
          {...props}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#201C19] via-[#35251F] to-[#201C19] border border-[#D6A54D]/20 p-6 text-center">
          <div className="w-12 h-12 rounded-full border border-[#D6A54D]/40 flex items-center justify-center text-[#D6A54D] mb-3">
            <span className="font-serif text-lg font-bold">G</span>
          </div>
          <span className="text-xs uppercase tracking-widest text-[#D6A54D]">Gaonkari Restaurant</span>
          <span className="text-[13px] text-[#F7F0E5]/70 mt-1 max-w-[200px]">{fallbackText || alt}</span>
        </div>
      )}
    </div>
  );
};
