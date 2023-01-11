import './overrides.scss';
import "bootstrap/dist/js/bootstrap.bundle.min";

import './App.css';
import Navigation from './UI/Navigation';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './Pages/Home';

import Software from './Pages/Software/Software';
import DXPDevelopment from './Pages/Software/Projects/DXPDevelopment';
import ConfigAutomation from './Pages/Software/Projects/ConfigAutomation';
import KanjiApplication from './Pages/Software/Projects/KanjiApplication';
import SwivForPi from './Pages/Software/Projects/SwivForPi';
import WifiPrototype from './Pages/Software/Projects/WifiPrototype';
import RaspberryJukebox from './Pages/Software/Projects/RaspberryJukebox';
import AttachmentModule from './Pages/Software/Projects/AttachmentModule';

import Radio from './Pages/Radio/Radio';
import Components from './Pages/Radio/Components';
import Balkon from './Pages/Radio/Balkon';

import Linux from './Pages/Linux/Linux';
import Footer from './UI/Footer';



function App() {
    return (
    <Router>
      <div className='row '>
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
            <Route exact path='/pages/radio' element={<Radio />}></Route>
            <Route exact path='/pages/radio/components' element={<Components />}></Route>
            <Route exact path='/pages/radio/balcony' element={<Balkon />}></Route>
            <Route exact path='/pages/linux' element={<Linux />}></Route>
        </Routes>

        <Footer />
      </div>
    </Router>
    );
}

export default App;