import React, {useState} from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    const decrement = () => {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    const reset = () => {
        setCount(0);    
    }

    return (
        

        <div className='counter-container'>

                <div className='card-heading'>
                    <h2>Counter</h2>                
                </div>


            <p className='count-display'>{count}</p>
            <button className='counter-button'onClick={decrement}>-</button>
            <button className='counter-button' onClick={reset}>Reset</button>
            <button className='counter-button' onClick={increment}>+</button>
        </div>
    );
}

export default Counter;