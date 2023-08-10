import React, { useState } from 'react';
import JapanMap from './JapanMap';
import Dropdown from './Dropdown';

const Japan = () => {
    const [selectedColor, setSelectedColor] = useState('');

    const handleColorChange = (event) => {
      setSelectedColor(event.target.value);
    };

    return (        
        <div className='row'>
            <h1>Japan</h1>
            <Dropdown selectedColor={selectedColor} handleColorChange={handleColorChange} />
            <JapanMap selection={selectedColor} />
        </div>
    )
}

export default Japan;
