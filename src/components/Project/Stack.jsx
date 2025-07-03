import './Stack.css';

function Stack({ stack }) {
    return (
        <div className="stackWrapper">
            <p className="stackName">{stack}</p>
        </div>
    );
};

export default Stack;