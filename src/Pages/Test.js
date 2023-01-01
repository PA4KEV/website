import React from 'react';
import ContentItem from '../Content/ContentItem';
import Sidebar from '../UI/Sidebar';

function Test (){
    return (        
        <div className='row'>
            <Sidebar />
            <ContentItem title="Welcome to the Test page!"/>
        </div>
        )
}

export default Test;