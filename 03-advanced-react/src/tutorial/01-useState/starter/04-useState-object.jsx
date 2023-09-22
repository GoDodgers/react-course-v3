import { useState } from 'react';

const UseStateObject = () => {

    const [ person, setPerson ] = useState({
        name: "Melody",
        age: "25",
        hobby: "surfing"
    });
    

    const click = () => {
        setPerson({
            name: "John",
            age: "25",
            hobby: "camping"
        });
        // setPerson({ ...person, hobby: "" });
    }

    return (
        <>
            <main>
                <h2>useState object example</h2>;
                <br />
                <h1>{ person.name }</h1>
                <h4>{ person.age }</h4>
                <h4>{ person.hobby }</h4>
                <button className='btn' onClick={ click }>click</button>
            </main>
        </>
    );
};

export default UseStateObject;
