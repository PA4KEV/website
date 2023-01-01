import React from 'react';
import ContentItem from '../../Content/ContentItem';
import Sidebar from '../../UI/Sidebar';

function Linux (){
    return (        
        <div className='row'>
            <Sidebar />
            <ContentItem title="Welcome to the Linux page!"/>
        </div>
        )
}

export default Linux;