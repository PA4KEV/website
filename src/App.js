import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";

import './App.css';
import Navigation from './UI/Navigation';
import ContentItem from './Content/ContentItem';
import Sidebar from './UI/Sidebar';

function App() {
    return (
    <div>
      <div className='row '>
        <Navigation />
      </div>
      <div className='row'>
        <Sidebar />
        <ContentItem />
      </div>
    </div>
    );
}

export default App;