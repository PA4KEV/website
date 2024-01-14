import React from 'react';

import './overrides.scss';
import "bootstrap/dist/js/bootstrap.bundle.min";

import './App.css';
import Navigation from './UI/Navigation';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';

import Software from './Pages/Software/Software';
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

import Radio from './Pages/Radio/Radio';
import Components from './Pages/Radio/Components';
import Balkon from './Pages/Radio/Balkon';

import Fielddays from './Pages/Radio/fielddays/fielddays';
import FD20231111EN from './Pages/Radio/fielddays/en/20231111'
import FD20231111NL from './Pages/Radio/fielddays/nl/20231111'
import FD20231230EN from './Pages/Radio/fielddays/en/20231230'
import FD20231230NL from './Pages/Radio/fielddays/nl/20231230'
import fielddaysdata from './Pages/Radio/fielddays/fielddays.json'

import Linux from './Pages/Linux/Linux';
import Footer from './UI/Footer';

import BasicPage from './Pages/BasicPage';
import Japan from './Japan/Japan';
import Japanese from './Pages/Japanese/Japan';


function App() {
  return (
    <Router>
      <div className="row">
        <Navigation />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/pages/software' element={<Software />}></Route>
          <Route exact path='/pages/software/dxp-development' element={<DXPDevelopment />}></Route>
          <Route exact path='/pages/software/configuration-automation' element={<ConfigAutomation />}></Route>
          <Route exact path='/pages/software/wifi-prototype' element={<WifiPrototype />}></Route>
          <Route exact path='/pages/software/embedded-game' element={<SwivForPi />}></Route>
          <Route exact path='/pages/software/raspberry-pi-jukebox' element={<RaspberryJukebox />}></Route>
          <Route exact path='/pages/software/kanji-application' element={<KanjiApplication />}></Route>
          <Route exact path='/pages/software/attachment-module' element={<AttachmentModule />}></Route>
          <Route exact path='/pages/software/teslamaze' element={<TeslaMaze />}></Route>
          <Route exact path='/pages/software/embedded-internet-radio' element={<EmbeddedInternetRadio />}></Route>
          <Route exact path='/pages/software/windows10-cookbook' element={<Windows10Cookbook />}></Route>
          <Route exact path='/pages/software/ios-airports' element={<IOSAirports />}></Route>
          <Route exact path='/pages/software/festival-simulator' element={<FestivalSimulator />}></Route>
          <Route exact path='/pages/software/boebot' element={<BoardOfEducationBot />}></Route>
          <Route exact path='/pages/software/metroid-horizontal-shooter' element={<MetroidShooter />}></Route>
          <Route exact path='/pages/radio' element={<Radio />}></Route>
          <Route exact path='/pages/radio/components' element={<Components />}></Route>
          <Route exact path='/pages/radio/balcony' element={<Balkon />}></Route>
          <Route exact path='/pages/radio/fielddays' element={<Fielddays fieldDays={fielddaysdata.fielddays} />}></Route>
          <Route exact path='/pages/books' element={<Books books={booksdata.books} />}></Route>
          <Route exact path='/pages/linux' element={<Linux />}></Route>
          <Route exact path='/pages/japanese' element={<Japanese />}></Route>
          <Route exact path='/pages/books' element={<Books />}></Route>

          <Route exact path='/pages/basic' element={<BasicPage id="1" />}></Route>
          <Route exact path='/wine' element={<BasicPage id="4" />}></Route>

          <Route exact path='/en/pages/radio/fielddays/20231111' element={<FD20231111EN />}></Route>
          <Route exact path='/en/pages/radio/fielddays/20231230' element={<FD20231230EN />}></Route>

          <Route exact path='/nl/pages/radio/fielddays/20231111' element={<FD20231111NL />}></Route>
          <Route exact path='/nl/pages/radio/fielddays/20231230' element={<FD20231230NL />}></Route>


          <Route exact path='/japan' element={<Japan />}></Route>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;