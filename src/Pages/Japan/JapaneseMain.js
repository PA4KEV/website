import React from 'react';
import Emoji from '../../Content/Emoji';
import MarkdownPage from '../markdownPage';
import { getLanguage } from '../../App';

const JapaneseMain = () => {
    const language = getLanguage();

    return (
        <article className="main-page">
            <h1 id="list-intro" className="text-primary">Japanese <Emoji symbol="🇯🇵" /></h1>
            <MarkdownPage md={'Japan/' + language + '/main.md'} />
        </article>
    )
}

export default JapaneseMain;