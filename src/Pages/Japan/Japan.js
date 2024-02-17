import React, { useState } from 'react';
import JapanMap from './components/JapanMap';
import Dropdown from './components/Dropdown';
import { getLanguage } from '../../App';

const Japan = () => {
    const [selectedColor, setSelectedColor] = useState('');

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
    };

    const language = getLanguage();

    return (
        <article className='main-page'>
            <div className='row'>
                <Dropdown selectedColor={selectedColor} handleColorChange={handleColorChange} />
                <div className='container-map'>
                    <JapanMap selection={selectedColor} />
                </div>
            </div>
            <div className='row'>
                <p><a href='https://github.com/PA4KEV/japan-vector-map'>Get this map at Github</a></p>
            </div>
        </article>
    )
}

export default Japan;
