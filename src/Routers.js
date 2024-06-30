import React from 'react';
import { Route } from 'react-router-dom';
import { languages } from './Language/Language';
import ElmPage from './Pages/Software/elm/ElmPage';

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

