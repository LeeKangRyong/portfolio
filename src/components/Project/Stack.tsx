import './Stack.css';
import type { StackProps } from '@/types';

const Stack = ({ stack }: StackProps) => {
  return (
    <div className="stackWrapper">
      <p className="stackName">{stack}</p>
    </div>
  );
};

export default Stack;
