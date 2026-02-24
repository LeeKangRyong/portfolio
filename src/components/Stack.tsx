import type { StackProps } from '@/types';

const Stack = ({ name, icon }: StackProps) => {
  return (
    <div className="bg-white rounded-2xl py-2.5 px-3 flex flex-col items-center justify-center gap-1.5 w-full box-border max-lg:py-2 max-lg:px-2.5 max-lg:rounded-xl max-md:py-1.5 max-md:px-2 max-md:rounded-lg max-sm:py-1 max-sm:px-1.5 max-sm:rounded-md">
      <img
        className="w-6 h-6 object-contain max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4"
        src={icon}
        alt={`${name} icon`}
      />
      <p className="text-sm text-black m-0 font-medium whitespace-pre-line text-center overflow-hidden text-ellipsis leading-none max-lg:text-xs max-md:text-[0.7rem] max-sm:text-[0.65rem]">
        {name}
      </p>
    </div>
  );
};

export default Stack;
