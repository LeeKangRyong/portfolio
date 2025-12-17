import './Stack.css';

interface StackProps {
    stack: string;
}

const Stack = ({ stack }: StackProps) => {
    return (
        <div className="stackWrapper">
            <p className="stackName">{stack}</p>
        </div>
    );
};

export default Stack;