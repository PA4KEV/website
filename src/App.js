import React from 'react';

import './overrides.scss';
import "bootstrap/dist/js/bootstrap.bundle.min";

import './App.css';
import Navigation from './UI/Navigation';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';

import SoftwareMain from './Pages/Software/SoftwareMain';
import DXPDevelopment from './Pages/Software/Projects/DXPDevelopment';
import ConfigAutomation from './Pages/Software/Projects/ConfigAutomation';
import KanjiApplication from './Pages/Software/Projects/KanjiApplication';
import SwivForPi from './Pages/Software/Projects/SwivForPi';
import WifiPrototype from './Pages/Software/Projects/WifiPrototype';
import RaspberryJukebox from './Pages/Software/Projects/RaspberryJukebox';
import AttachmentModule from './Pages/Software/Projects/AttachmentModule';
import TeslaMaze from './Pages/Software/Projects/TeslaMaze';
import EmbeddedInternetRadio from './Pages/Software/Projects/EmbeddedInternetRadio';
import Windows10Cookbook from './Pages/Software/Projects/Windows10Cookbook';
import IOSAirports from './Pages/Software/Projects/IOSAirports';
import FestivalSimulator from './Pages/Software/Projects/FestivalSimulator';
import BoardOfEducationBot from './Pages/Software/Projects/BoardOfEducationBot';
import MetroidShooter from './Pages/Software/Projects/MetroidShooter';

import Books from './Pages/Books/Books';
import booksdata from './Pages/Books/books.json'

import RadioMain from './Pages/Radio/RadioMain';
import Fieldday from './Pages/Radio/fielddays/fieldday';

import Linux from './Pages/Linux/Linux';
import Footer from './UI/Footer';

import BasicPage from './Pages/BasicPage';

import JapanMapPage from './Pages/Japan/JapanMapPage';
import JapanMain from './Pages/Japan/JapanMain';
import JapanesePage from './Pages/Japan/JapanesePage';

import EquipmentPage from './Pages/Radio/equipmentPage';

import { languages, getLanguage } from './Language/Language';
import { elmRoutes, japaneseRoutes } from './Routers';

function App() {
  const language = getLanguage();

  const paths = {
    'japan': <JapanMain />,
    'japan/japanese': <JapanesePage />, // Needs an md_path
    'japanMap': <JapanMapPage />,
    'radio': <RadioMain />,
    'software': <SoftwareMain />,
  };

  const fieldDaysRoutes = languages.map(lang => {
    const dates = ['20231111', '20231230', '20240121'];
    return dates.map(date => {
      const path = `/${lang}/radio/fielddays/${date}`;
      const mdPath = `Radio/fielddays/${lang}/${date}.md`;
      return <Route key={`${lang}-${date}`} exact path={path} element={<Fieldday mdPath={mdPath} />} />;
    });
  }).flat();

  const equipmentRoutes = languages.map(lang => {
    const equipments = [
      {
        title: 'nvis',
        category: 'antenna',
        filename: 'nvis'
      }
    ];
    return equipments.map(equipment => {
      const path = `/${lang}/radio/equipment/${equipment.category}/${equipment.title}`;
      const mdPath = `Radio/${lang}/equipment/${equipment.category}/${equipment.filename}.md`;
      return <Route key={`${lang}-${equipment.title}`} exact path={path} element={<EquipmentPage mdPath={mdPath} />} />;
    });
  }).flat();

  function generateRoutes(languages, paths) {
    const routes = [];

    languages.forEach(language => {
      Object.keys(paths).forEach(path => {
        const fullPath = `/${language}/${path}`;
        routes.push(
          <Route key={`${language}-${path}`} exact path={fullPath} element={paths[path]} />
        );
      });
    });

    return routes;
  }
  const generatedRoutes = generateRoutes(languages, paths);

  return (
    <Router>
      <div className='container'>
        <Navigation language={language} />
        <Routes>
          <Route exact path='/' element={<Home language={"en"} />}></Route>
          <Route exact path='/en' element={<Home language={language} />}></Route>
          <Route exact path='/nl' element={<Home language={language} />}></Route>

          {/* Japan */}
          {japaneseRoutes}

          {/* Radio */}
          {componentRoutes}
          {fieldDaysRoutes}
          {equipmentRoutes}
          {generatedRoutes}

          {/* Software */}
          {elmRoutes}
          <Route exact path='/software/dxp-development' element={<DXPDevelopment />}></Route>
          <Route exact path='/software/configuration-automation' element={<ConfigAutomation />}></Route>
          <Route exact path='/software/wifi-prototype' element={<WifiPrototype />}></Route>
          <Route exact path='/software/embedded-game' element={<SwivForPi />}></Route>
          <Route exact path='/software/raspberry-pi-jukebox' element={<RaspberryJukebox />}></Route>
          <Route exact path='/software/kanji-application' element={<KanjiApplication />}></Route>
          <Route exact path='/software/attachment-module' element={<AttachmentModule />}></Route>
          <Route exact path='/software/teslamaze' element={<TeslaMaze />}></Route>
          <Route exact path='/software/embedded-internet-radio' element={<EmbeddedInternetRadio />}></Route>
          <Route exact path='/software/windows10-cookbook' element={<Windows10Cookbook />}></Route>
          <Route exact path='/software/ios-airports' element={<IOSAirports />}></Route>
          <Route exact path='/software/festival-simulator' element={<FestivalSimulator />}></Route>
          <Route exact path='/software/boebot' element={<BoardOfEducationBot />}></Route>
          <Route exact path='/software/metroid-horizontal-shooter' element={<MetroidShooter />}></Route>

          <Route exact path='/books' element={<Books books={booksdata.books} />}></Route>
          <Route exact path='/linux' element={<Linux />}></Route>
          <Route exact path='/books' element={<Books />}></Route>

          <Route exact path='/basic' element={<BasicPage id="1" />}></Route>
          <Route exact path='/wine' element={<BasicPage id="4" />}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;