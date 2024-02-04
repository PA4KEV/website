import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';

const MarkdownPage = ({ md }) => {
    const file_name = md;
    const [markdownContent, setPost] = useState('');

    useEffect(() => {
        import(`./${file_name}`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    });

    const MyArticle = ({ children }) => <article className="main-page">{children}</article>

    const MyParagraph = ({ children, ...props }) => <h1 {...props}>{children}</h1>

    const MyImage = ({ src, alt }) => {
        return (
            <picture>
                <source media="(max-width: 799px)" srcSet={`${src}-w240.webp`} />
                <source media="(min-width: 800px) and (max-width: 1199px)" srcSet={`${src}-w480.webp`} />
                <source media="(min-width: 1200px)" srcSet={`${src}-w800.webp`} />
                <img alt={alt} src={`${src}-w800.webp`} />
            </picture>)
    }

    return (
        <Markdown options={{
            wrapper: MyArticle,
            overrides: {
                h1: {
                    component: MyParagraph,
                    props: {
                        className: 'text-primary',
                    },
                },
                img: {
                    component: MyImage
                }
            },
        }}>
            {markdownContent}
        </Markdown>
    )
}

export default MarkdownPage;
