import React from 'react';
import Emoji from '../../Content/Emoji';
import MarkdownPage from '../markdownPage';
import { getLanguage } from '../../App';

const SoftwareMain = () => {
    const language = getLanguage();

    return (
        <article className="main-page">
            <h1 id="list-intro" className="text-primary">Software <Emoji symbol="🖥️" /></h1>
            <MarkdownPage md={'Software/' + language + '/main.md'} />
        </article>
    )
}

export default SoftwareMain;