import React from 'react';
import MarkdownPage from '../markdownPage';
import { getLanguage } from '../../Language/Language';

const ScaleModelMain = () => {
    const language = getLanguage();

    return (
        <article className="main-page">
            <MarkdownPage md={'ScaleModel/' + language + '/main.md'} />            
        </article>
    )
}

export default ScaleModelMain;