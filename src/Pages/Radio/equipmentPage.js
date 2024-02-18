import React from 'react';
import Breadcrumbs from '../../UI/Breadcrumbs'
import MarkdownPage from '../markdownPage'

const EquipmentPage = ({ mdPath }) => {
    return (
        <article className='main-page'>
            <Breadcrumbs separator=' > ' path="radio">
                {['radio']}
            </Breadcrumbs>
            <MarkdownPage md={mdPath} />
        </article>
    )
}

export default EquipmentPage;