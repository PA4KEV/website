import React from 'react';
import Breadcrumbs from '../../../UI/Breadcrumbs'
import MarkdownPage from '../../markdownPage'

const CSharpPage = ({ mdPath }) => {
    return (
        <article className='main-page'>
            <Breadcrumbs separator=' > ' path="software/csharp">
                {['software', 'c#']}
            </Breadcrumbs>
            <MarkdownPage md={mdPath} />
        </article>
    )
}

export default CSharpPage;