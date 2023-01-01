import React from 'react';
import ContentItem from '../../Content/ContentItem';
import Sidebar from '../../UI/Sidebar';

function Software (){
    return (        
        <div className='row'>
            <Sidebar />
            <ContentItem title="Welcome to the Software page!"/>
        </div>
        )
}

export default Software;