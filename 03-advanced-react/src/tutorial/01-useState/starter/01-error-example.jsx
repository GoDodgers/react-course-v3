import { useState } from "react"

const ErrorExample = () => {

    const [ count, setCount ] = useState(0);

    
    const handleClick = () => {
        setCount((count) => count + 1);
    };

    return (
        <>
            <h2>{count}</h2>
            <button onClick={ handleClick } className="btn"> Increase </button>
        </>
    );
};

export default ErrorExample;
