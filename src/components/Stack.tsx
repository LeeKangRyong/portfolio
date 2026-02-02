import type { StackProps } from '@/types';

const Stack = ({ stack }: StackProps) => {
  return (
    <div className="bg-white rounded-2xl py-2.5 px-3 flex items-center justify-center w-full box-border max-lg:py-2 max-lg:px-2.5 max-lg:rounded-xl max-md:py-1.5 max-md:px-2 max-md:rounded-lg max-sm:py-1 max-sm:px-1.5 max-sm:rounded-md">
      <p className="text-sm text-black m-0 font-medium whitespace-pre-line text-center overflow-hidden text-ellipsis leading-none max-lg:text-xs max-md:text-[0.7rem] max-sm:text-[0.65rem]">
        {stack}
      </p>
    </div>
  );
};

export default Stack;
