import type { ZoomProps } from '@/types';

function Zoom({ imageSrc, altText, onClose }: ZoomProps) {
  return (
    <div
      className="fixed inset-0 bg-black/90 flex justify-center items-center z-[10000] backdrop-blur-sm animate-[zoomFadeIn_0.3s_ease-out] max-md:p-2 max-sm:p-1"
      onClick={onClose}
    >
      <div
        className="relative max-w-[98%] max-h-[95%] animate-[zoomIn_0.3s_ease-out] max-lg:max-w-[96%] max-lg:max-h-[92%] max-md:max-w-[98%] max-md:max-h-[90%] max-sm:max-w-[99%] max-sm:max-h-[88%]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute -top-10 right-0 bg-white text-black border-none rounded-full w-10 h-10 text-xl font-bold cursor-pointer flex items-center justify-center transition-all duration-300 z-[10001] hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50 max-lg:-top-9 max-lg:w-9 max-lg:h-9 max-lg:text-lg max-md:-top-7 max-md:-right-2 max-md:w-8 max-md:h-8 max-md:text-base max-md:bg-white/95 max-sm:-top-6 max-sm:-right-1 max-sm:w-7 max-sm:h-7 max-sm:text-sm"
          onClick={onClose}
        >
          ✕
        </button>
        <img
          className="w-full h-auto max-w-[100rem] max-h-[95vh] object-contain rounded-lg shadow-2xl max-lg:max-w-[75rem] max-lg:max-h-[92vh] max-lg:rounded-md max-md:max-w-full max-md:max-h-[90vh] max-md:rounded max-sm:max-h-[88vh] max-sm:rounded-sm"
          src={imageSrc}
          alt={altText}
        />
      </div>
    </div>
  );
}

export default Zoom;
