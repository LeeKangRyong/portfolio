import type { HistoryProps } from '@/types';

const History = ({ title, duration, description }: HistoryProps) => {
  return (
    <div className="flex flex-row justify-start items-center border-b border-white py-8 gap-12 w-full last:border-b-0 max-lg:flex-col max-lg:items-center max-lg:gap-6 max-lg:py-6 max-lg:text-center max-md:gap-4 max-sm:py-4 max-sm:gap-3">
      <div className="w-80 shrink-0 flex flex-col items-center text-center max-lg:w-full">
        <h3 className="text-3xl font-bold mb-2 text-white whitespace-pre-line leading-tight max-lg:text-2xl max-md:text-xl max-md:mb-1 max-sm:text-lg">
          {title}
        </h3>
        <p className="text-xl text-white/70 m-0 font-medium max-lg:text-lg max-md:text-base max-md:mb-2 max-sm:text-sm">
          {duration}
        </p>
      </div>

      <div className="w-px bg-white/50 shrink-0 self-stretch min-h-24 max-lg:hidden" />

      <div className="flex-1 flex flex-col items-start min-w-0 max-lg:w-full max-lg:items-center">
        <p className="text-2xl leading-relaxed text-white m-0 whitespace-pre-line text-left max-lg:text-center max-lg:text-xl max-md:text-lg max-sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default History;
