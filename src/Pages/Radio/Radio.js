import React from 'react';
import ContentItem from '../../Content/ContentItem';
import Sidebar from '../../UI/Sidebar';

function Radio (){
    return (        
        <div className='row'>
            <Sidebar />
            <ContentItem title="Welcome to the Radio page!"/>
        </div>
        )
}

export default Radio;