import React from 'react';
import Breadcrumbs from '../../../UI/Breadcrumbs'
import MarkdownPage from '../../markdownPage'

const ElmPage = ({ mdPath }) => {
    return (
        <article className='main-page'>
            <Breadcrumbs separator=' > ' path="software/elm">
                {['software', 'elm']}
            </Breadcrumbs>
            <MarkdownPage md={mdPath} />
        </article>
    )
}

export default ElmPage;