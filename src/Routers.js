import React from 'react';
import { Route } from 'react-router-dom';
import { languages } from './Language/Language';
import JapanesePage from './Pages/Japan/JapanesePage';
import BlogPage from './Pages/ScaleModel/BlogPage';
import CSharpPage from './Pages/Software/csharp/CSharpPage';
import ElmPage from './Pages/Software/elm/ElmPage';


// Japan
export const japaneseRoutes = languages.map(lang => {
    const pages = ['but', 'cheat-sheet', 'contrast-particle', 'dake-vs-shika', 'if-when', 'particles', 'tameni-youni-noni', 'toka-tari-shi', 'verbs'];
    return pages.map(page => {
      const path = `/${lang}/japan/japanese/${page}`;
      const mdPath = `Japan/Japanese/${lang}/${page}.md`;
      return <Route key={`${lang}-${page}`} exact path={path} element={<JapanesePage mdPath={mdPath} />} />;
    });
  }).flat();

// Scale model
export const scaleModelBlogRoutes = languages.map(lang => {
  const pages = ['smc-2025-rx-178-mk-2'];
  return pages.map(page => {
    const path = `/${lang}/scalemodel/blog/${page}`;
    const mdPath = `ScaleModel/blog/${lang}/${page}.md`;
    return <Route key={`${lang}-${page}`} exact path={path} element={<BlogPage mdPath={mdPath} />} />;
  });
}).flat();

// Software
export const programmingLanguageRoutes = languages.map(lang => {
    // Main page.
    const mainCSharp = <Route key={`${lang}-csharp-main`} exact path={`/${lang}/software/csharp/`} element={<CSharpPage mdPath={`Software/csharp/${lang}/main.md`} />} />
    const mainElm = <Route key={`${lang}-elm-main`} exact path={`/${lang}/software/elm/`} element={<ElmPage mdPath={`Software/elm/${lang}/main.md`} />} />

    // Pages within Elm.
    let md = ['strings', 'types'];
    const entriesCSharp = md.map(entry => {
        const path = `/${lang}/software/csharp/${entry}`;
        const mdPath = `Software/csharp/${lang}/${entry}.md`;
        return <Route key={`${lang}-${entry}`} exact path={path} element={<CSharpPage mdPath={mdPath} />} />;
    });

    // Pages within Elm.
    md = ['dry', 'formatting', 'maybeandthen', 'maybemap'];
    const entriesElm = md.map(entry => {
        const path = `/${lang}/software/elm/${entry}`;
        const mdPath = `Software/elm/${lang}/${entry}.md`;
        return <Route key={`${lang}-${entry}`} exact path={path} element={<ElmPage mdPath={mdPath} />} />;
    });

    return [mainCSharp, mainElm, ...entriesCSharp, ...entriesElm];
}).flat();
