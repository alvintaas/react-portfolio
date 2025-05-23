import React, {useState} from 'react';

// How to update OBJECTS in useState//
// https://www.youtube.com/watch?v=YxQlt3n1ZPA&list=PLZPZq0r_RZOMQArzyI32mVndGBZ3D99XQ&index=12

function MyComponent3() {

    const [car, setCar] = useState({year: 2020,
                                    make: "Porsche",
                                    model: "911"});

    function handleYearChange(event) {
        setCar(c => ({...c,year: event.target.value}));
    }

    function handleMakeChange(event) {
        setCar(c => ({...c,make: event.target.value}));
    }

    function handleModelChange(event) {
        setCar(c => ({...c,model: event.target.value}));
    }


    return (
        <div>
            <p>Your favorite car is: {car.year} {car.make} {car.model}</p><br/>

            <input type='number'value={car.year} onChange={handleYearChange}/><br />
            <input type='text'value={car.make} onChange={handleMakeChange}/><br />
            <input type='text'value={car.model} onChange={handleModelChange}/><br />
        </div>
    );

}

export default MyComponent3;