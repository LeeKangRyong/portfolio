import type { ZoomProps } from '@/types';

function Zoom({ imageSrc, altText, onClose }: ZoomProps) {
  return (
    <div
      className="fixed inset-0 bg-black/90 flex justify-center items-center z-[10000] backdrop-blur-sm animate-[zoomFadeIn_0.3s_ease-out] max-md:p-2 max-sm:p-1"
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      <div
        className="relative max-w-[98%] max-h-[95%] animate-[zoomIn_0.3s_ease-out] max-lg:max-w-[96%] max-lg:max-h-[92%] max-md:max-w-[98%] max-md:max-h-[90%] max-sm:max-w-[99%] max-sm:max-h-[88%]"
        onClick={(e) => e.stopPropagation()}
      >
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
