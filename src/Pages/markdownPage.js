import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import SyntaxHighlighter from 'react-syntax-highlighter';
// https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/HEAD/AVAILABLE_STYLES_HLJS.MD
import { docco, dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useTheme } from '../ThemeContext';

const MarkdownPage = ({ md }) => {
    const file_name = md;
    const [markdownContent, setPost] = useState('');
    const { theme } = useTheme();

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

    const MySection = ({ children }) => <section>{children}</section>

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

    function stripLangPrefix(inputString) {
        if (inputString.startsWith('lang-')) {
            return inputString.slice(5);
        }
        return inputString;
    }

    const MyCodeBlock = ({ children, className }) => {
        let codeOutput;
        if (theme === 'light') {
            codeOutput = <SyntaxHighlighter language={stripLangPrefix(className)} style={docco}>{children}</SyntaxHighlighter>;
        }
        else {
            codeOutput = <SyntaxHighlighter language={stripLangPrefix(className)} style={dracula}>{children}</SyntaxHighlighter>;
        }

        // <button className='code-block-copy-button'>{getString('copy')}</button>
        return (
            <div className={'code-block-' + theme}>
                <div className='code-block-header'>
                </div>
                {codeOutput}
            </div>
        )
    }

    return (
        <Markdown options={{
            wrapper: MySection,
            overrides: {
                h1: {
                    component: MyParagraph,
                    props: {
                        className: 'text-primary',
                    },
                },
                img: {
                    component: MyImage
                },
                code: {
                    component: MyCodeBlock
                }
            },
        }}>
            {markdownContent}
        </Markdown>
    )
}

export default MarkdownPage;
