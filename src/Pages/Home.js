import React from 'react';
import MarkdownPage from './markdownPage';

const Home = ({ language }) => {
    const pathHome = 'home-' + language + '.md';
    console.log(pathHome);


    return (
        <article className="main-page">
            <MarkdownPage md={pathHome} />
        </article>
    )
}

export default Home;