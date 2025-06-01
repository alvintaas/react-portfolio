import React, { useState, useEffect, useRef } from 'react'; 

function RefComponent() { 

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("Component rendered");
        console
    });

    function handleClick1() {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = 'yellow';
    }

    function handleClick2() {
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = 'yellow';
    }
    function handleClick3() {
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = 'yellow';
    }


    return ( 
        <div>
            <input type="text" ref={inputRef1} />
            <br/>
            <button onClick={handleClick1}>Click Me 1!</button>
            
            <input type="text" ref={inputRef2} />
            <br/>
            <button onClick={handleClick2}>Click Me 2!</button>
            
            <input type="text" ref={inputRef3} />
            <br/>
            <button onClick={handleClick3}>Click Me 3!</button>
            
        </div>
    );
}

export default RefComponent;