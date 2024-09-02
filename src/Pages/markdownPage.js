import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import SyntaxHighlighter from 'react-syntax-highlighter';
// https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/HEAD/AVAILABLE_STYLES_HLJS.MD
import { docco, dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useTheme } from '../ThemeContext';

const MySection = ({ children }) => {
    return (<section>{children}</section>);
}

const MyParagraph = ({ children, ...props }) => {
    return (<h1 {...props}>{children}</h1>);
}

const MyImage = ({ src, alt }) => {
    return (
        <picture>
            <source media="(max-width: 799px)" srcSet={`${src}-w240.webp`} />
            <source media="(min-width: 800px) and (max-width: 1199px)" srcSet={`${src}-w480.webp`} />
            <source media="(min-width: 1200px)" srcSet={`${src}-w800.webp`} />
            <img alt={alt} src={`${src}-w800.webp`} />
        </picture>);
}

const Jps = ({ text, colour, underline, strikethrough }) => {
    const { theme } = useTheme();
    let classBuilder = `jsp ` + theme;

    if (colour) {
        classBuilder = classBuilder + ` ` + colour
    }
    if (underline) {
        classBuilder = classBuilder + ` u`
    }
    if (strikethrough) {
        classBuilder = classBuilder + ` s`
    }

    return (<span className={classBuilder}>{text}</span>);
}

const MyCodeBlock = ({ children, className }) => {
    const { theme } = useTheme();

    function stripLangPrefix(inputString) {
        let softwareLanguage = inputString ?? ''
        // if (inputString === 'undefinded') {
        //     return '';
        // }

        if (softwareLanguage.startsWith('lang-')) {
            return softwareLanguage.slice(5);
        }
        return softwareLanguage;
    }

    console.log("MyCodeBlock: " + className);
    let codeOutput;
    let styling = (true) ? docco : dracula; //theme === 'light'
    codeOutput = <SyntaxHighlighter language={stripLangPrefix(className)} style={styling}>{children}</SyntaxHighlighter>;

    // <button className='code-block-copy-button'>{getString('copy')}</button>

    return (
        <div className={'code-block-' + theme}>
            <div className='code-block-header'></div>
            {codeOutput}
        </div>
    );
}

// TODO 1: Create error if given markdown file does not exist.
// TODO 2: Create error if file for given language does not exist.

const MarkdownPage = ({ md }) => {
    const [markdownContent, setPost] = useState('');

    // causes 3 calls somehow...
    useEffect(() => {
        import(`./${md}`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    });

    return (
        <Markdown
            options={{
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
                    },
                    Jps: {
                        component: Jps
                    }
                },
            }}>
            {markdownContent}
        </Markdown>
    )
}

export default MarkdownPage;
