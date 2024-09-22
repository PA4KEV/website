import React from 'react';
import Breadcrumbs from '../../UI/Breadcrumbs';
import MarkdownPage from '../markdownPage';

const JapanesePage = ({ mdPath }) => {
    return (
        <article className='main-page'>
            <Breadcrumbs separator=' > ' path="japan">
                {['japan']}
            </Breadcrumbs>
            <MarkdownPage md={mdPath} />
        </article>
    )
}

export default JapanesePage;