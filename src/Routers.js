import React from 'react';
import { Route } from 'react-router-dom';
import { languages } from './Language/Language';
import JapanesePage from './Pages/Japan/JapanesePage';
import ElmPage from './Pages/Software/elm/ElmPage';


// Japan
export const japaneseRoutes = languages.map(lang => {
    const pages = ['contrast-particle', 'dake-vs-shika'];
    return pages.map(page => {
      const path = `/${lang}/japan/japanese/${page}`;
      const mdPath = `Japan/Japanese/${lang}/${page}.md`;
      return <Route key={`${lang}-${page}`} exact path={path} element={<JapanesePage mdPath={mdPath} />} />;
    });
  }).flat();

// Software
export const elmRoutes = languages.map(lang => {
    // Main page.
    const main = <Route key={`${lang}-elm-main`} exact path={`/${lang}/software/elm/`} element={<ElmPage mdPath={`Software/elm/${lang}/main.md`} />} />

    // Pages within Elm.
    const md = ['dry', 'formatting', 'maybeandthen', 'maybemap'];
    const entries = md.map(entry => {
        const path = `/${lang}/software/elm/${entry}`;
        const mdPath = `Software/elm/${lang}/${entry}.md`;
        return <Route key={`${lang}-${entry}`} exact path={path} element={<ElmPage mdPath={mdPath} />} />;
    });

    return [main, ...entries];
}).flat();
