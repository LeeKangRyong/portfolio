import type { StackProps } from '@/types';

const Stack = ({ name, icon }: StackProps) => {
  return (
    <div className="bg-white/10 border border-white/20 rounded-full py-1 px-2.5 flex flex-row items-center gap-1.5 w-fit box-border">
      <img
        className="w-4 h-4 object-contain shrink-0"
        src={icon}
        alt={`${name} icon`}
      />
      <p className="text-xs text-white m-0 font-medium whitespace-nowrap leading-none">
        {name}
      </p>
    </div>
  );
};

export default Stack;
