import React, { useState, useEffect } from 'react'; 

export default (props) => {
    
    const [ counter, setCounter ] = useState(props.init);
    const [ counter2, setCounter2 ] = useState(0);

    const increaseCounter = () => {
        setCounter(counter + 1);
    };

    const increaseCounter2 = () => {
        setCounter2(counter2 + 1);
    }; 

    useEffect(() =>{
        console.log('Hello')
        return () => {
        console.log('Bye');
    }
}, [counter]);
    
    
    
    return(
        <div>
            <p> Counter: {counter}</p>
            <button onClick={increaseCounter} type="button">
                Add + 1
            </button>
            <p> Counter2: {counter2}</p>
            <button onClick={increaseCounter2} type="button">
                Add + 1
            </button>
            <br/>
        </div>
    );
}