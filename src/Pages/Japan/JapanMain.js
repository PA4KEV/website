import React from 'react';
import Emoji from '../../Content/Emoji';
import MarkdownPage from '../markdownPage';
import { getLanguage } from '../../Language/Language';
import { getString } from '../../Language/LanguageStrings'

const JapanMain = () => {
    const language = getLanguage();

    return (
        <article className="main-page">
            <h1 id="list-intro" className="text-primary">{getString('japan')} <Emoji symbol="🇯🇵" /></h1>
            <MarkdownPage md={'Japan/' + language + '/main.md'} />            
        </article>
    )
}

export default JapanMain;