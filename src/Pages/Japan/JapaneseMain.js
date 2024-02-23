import React from 'react';
import Emoji from '../../Content/Emoji';
import MarkdownPage from '../markdownPage';
import { getLanguage, getString } from '../../App';

const JapaneseMain = () => {
    const language = getLanguage();

    return (
        <article className="main-page">
            <h1 id="list-intro" className="text-primary">{getString('japanese')} <Emoji symbol="🇯🇵" /></h1>
            <MarkdownPage md={'Japan/' + language + '/main.md'} />
        </article>
    )
}

export default JapaneseMain;