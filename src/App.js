import './overrides.scss';
import "bootstrap/dist/js/bootstrap.bundle.min";

import './App.css';
import Navigation from './UI/Navigation';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './Pages/Home';

import Software from './Pages/Software/Software';
import DXPDevelopment from './Pages/Software/Projects/DXPDevelopment';
import ConfigAutomation from './Pages/Software/Projects/ConfigAutomation';

import Radio from './Pages/Radio/Radio';
import Components from './Pages/Radio/Components';

import Linux from './Pages/Linux/Linux';


function App() {
    return (
    <Router>
      <div className='row '>
        <Navigation />
      </div>
      <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/pages/software' element={<Software />}></Route>
            <Route exact path='/pages/software/dxp-development' element={<DXPDevelopment />}></Route>
            <Route exact path='/pages/software/configuration-automation' element={<ConfigAutomation />}></Route>
            <Route exact path='/pages/radio' element={<Radio />}></Route>
            <Route exact path='/pages/radio/components' element={<Components />}></Route>
            <Route exact path='/pages/linux' element={<Linux />}></Route>
        </Routes>
    </Router>
    );
}

export default App;