import { useState, useEffect } from 'react';
import useAssets from '@/hooks/useAssets';
import FAQ from '@/components/FAQ';
import Zoom from '@/components/Zoom';
import ImageSkeleton from '@/components/ImageSkeleton';
import { motion, AnimatePresence } from 'framer-motion';
import type { ModalProps } from '@/types';

interface ZoomImage {
  src: string;
  alt: string;
}

const Modal = ({
  onClose,
  type,
  title,
  duration,
  summary,
  architecture,
  faq,
  headerColor,
}: ModalProps) => {
  const { assets: projects } = useAssets('projects');
  const [zoomImage, setZoomImage] = useState<ZoomImage | null>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const gridClass =
    type === 'app'
      ? 'grid grid-cols-4 gap-4 mb-8 max-lg:gap-3.5 max-lg:mb-7 max-md:grid-cols-2 max-md:gap-3 max-md:mb-6 max-sm:gap-2.5 max-sm:mb-4'
      : 'grid grid-cols-2 gap-4 mb-8 max-lg:gap-3.5 max-lg:mb-7 max-md:grid-cols-1 max-md:gap-3 max-md:mb-6 max-sm:gap-2.5 max-sm:mb-4';

  const handleImageClick = (imageSrc: string, altText: string) => {
    setZoomImage({ src: imageSrc, alt: altText });
  };

  const closeZoom = () => {
    setZoomImage(null);
  };

  return (
    <AnimatePresence>
      <motion.article
        className="fixed inset-0 bg-black/50 flex justify-center items-center z-[1000]"
        onClick={onClose}
        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
        animate={{ opacity: 1, backdropFilter: 'blur(10px)' }}
        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="bg-white rounded-lg shadow-xl max-w-[60rem] w-[90%] max-h-[90vh] relative box-border overflow-y-auto overflow-x-hidden flex flex-col scrollbar-hide max-lg:rounded-md max-lg:max-w-[40rem] max-lg:max-h-[85vh] max-md:rounded max-md:max-w-[30rem] max-md:w-[95%] max-md:max-h-[85vh] max-sm:rounded-sm max-sm:max-w-[20rem] max-sm:w-[95%] max-sm:max-h-[80vh]"
          onClick={(e) => e.stopPropagation()}
          initial={{
            scale: 0.3,
            rotate: -15,
            y: 100,
            opacity: 0,
            originX: 0.5,
            originY: 0.5,
          }}
          animate={{ scale: 1, rotate: 0, y: 0, opacity: 1 }}
          exit={{ scale: 0.3, rotate: 15, y: -100, opacity: 0 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 25,
            duration: 0.6,
          }}
        >
          <motion.div
            className="h-[20vh] w-full flex flex-col justify-center items-center z-[200] rounded-t-lg py-4 max-lg:rounded-t-md max-md:rounded-t max-sm:rounded-t-sm"
            style={{ backgroundColor: headerColor }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.h2
              className="text-white m-0 text-center text-3xl mb-2"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              {title}
            </motion.h2>
            <motion.p
              className="text-white m-0 text-center text-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              {duration}
            </motion.p>
          </motion.div>

          <motion.div
            className="p-8 bg-white flex-1 rounded-b-lg max-lg:p-7 max-lg:rounded-b-md max-md:p-6 max-md:rounded-b max-sm:p-4 max-sm:rounded-b-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.h3
              className="text-black text-xl m-0 mb-4 max-lg:text-lg max-lg:mb-3 max-md:text-base max-md:mb-3 max-sm:text-sm max-sm:mb-2.5"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              프로젝트 결과물
            </motion.h3>

            <motion.div
              className={gridClass}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {summary.map((imgKey, index) => {
                const imgSrc = projects[imgKey];
                return (
                  <motion.div
                    key={imgKey}
                    className="relative rounded-lg overflow-hidden cursor-pointer border-0 border-transparent group"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                  >
                    <ImageSkeleton
                      src={imgSrc}
                      alt={`project result ${index + 1}`}
                      className={`${type === 'app' ? 'aspect-[9/16] w-full' : 'aspect-video w-full'} transition-opacity duration-300 group-hover:opacity-90`}
                      objectFit="contain"
                    />
                    {imgSrc && (
                      <button
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 text-white border-none rounded-lg py-2 px-4 text-sm font-semibold cursor-pointer"
                        onClick={() =>
                          handleImageClick(
                            imgSrc,
                            `project result ${index + 1}`,
                          )
                        }
                      >
                        확대
                      </button>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.h3
              className="text-black text-xl m-0 mb-4 max-lg:text-lg max-lg:mb-3 max-md:text-base max-md:mb-3 max-sm:text-sm max-sm:mb-2.5"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              Architecture
            </motion.h3>

            <motion.div
              className="mb-8 text-center max-lg:mb-7 max-md:mb-6 max-sm:mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <motion.div
                className="relative inline-block rounded-lg overflow-hidden cursor-pointer max-w-[600px] w-full group"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.4 }}
              >
                <ImageSkeleton
                  src={projects[architecture]}
                  alt="project architecture"
                  className="aspect-video w-full transition-opacity duration-300 group-hover:opacity-90"
                />
                {projects[architecture] && (
                  <button
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 text-white border-none rounded-lg py-2 px-4 text-sm font-semibold cursor-pointer"
                    onClick={() => {
                      const src = projects[architecture];
                      if (src) handleImageClick(src, 'project architecture');
                    }}
                  >
                    확대
                  </button>
                )}
              </motion.div>
            </motion.div>

            <motion.h3
              className="text-black text-xl m-0 mb-4 max-lg:text-lg max-lg:mb-3 max-md:text-base max-md:mb-3 max-sm:text-sm max-sm:mb-2.5"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.4 }}
            >
              FAQ
            </motion.h3>

            <motion.div
              className="mt-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              {faq.map((item, index) => (
                <motion.div
                  key={item.question}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.3 + index * 0.1, duration: 0.4 }}
                >
                  <FAQ question={item.question} answer={item.answer} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
        {zoomImage && (
          <Zoom
            imageSrc={zoomImage.src}
            altText={zoomImage.alt}
            onClose={closeZoom}
          />
        )}
      </motion.article>
    </AnimatePresence>
  );
};

export default Modal;
