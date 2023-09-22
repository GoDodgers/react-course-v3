import { data } from '../../../data';
import { useState } from 'react';

const UseStateArray = () => {

    var [ people, setPeople ] = useState(data);

    console.log(people);

    const removeItem = (id) => {
        setPeople((people) => people.filter((person) => person.id != id ));
    };

    const clearList = (e) => {
        setPeople([{id: 1, name: 'empty list'}]);
    };

    const styles = {
        'marginLeft': '1rem',
        'marginTop': '4rem'
    };

    return (
        <>
            <div className='people-list'>
                    {
                        people.map(function(person, i) {

                            let { id, name } = person;

                            return (
                                <div key={ id }>
                                    <h1>{ name }</h1>
                                    <button onClick={ () => removeItem(id) }>remove</button>
                                </div>
                            );
                        })
                    }
            </div>
            <button className='btn' style={ styles } onClick={ clearList }>clear</button>
        </> 
    );
};

export default UseStateArray;
