import React, { useState } from 'react';



function StreetNameAutocomplete() {


    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const inputValue = event.target.value;
        fetch(`https://search-maps.yandex.ru/v1/?text=${inputValue}&type=geo&lang=en_US&apikey=82fa008e-20e2-4b12-902c-df70f0aa7fb0`)
            .then(data=>data.json())
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <input type="text" id="streetNameInput" onChange={handleInputChange} />

        </div>
    );
}

export default StreetNameAutocomplete;
