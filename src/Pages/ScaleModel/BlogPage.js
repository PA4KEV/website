import React from 'react';
import Breadcrumbs from '../../UI/Breadcrumbs';
import MarkdownPage from '../markdownPage';

const BlogPage = ({ mdPath }) => {
    return (
        <article className='main-page'>
            <Breadcrumbs separator=' > ' path="scalemodel">
                {['Scale model']}
            </Breadcrumbs>
            <MarkdownPage md={mdPath} />
        </article>
    )
}

export default BlogPage;