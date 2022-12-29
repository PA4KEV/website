import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";

import './App.css';
import Navigation from './UI/Navigation';
import ContentItem from './Content/ContentItem';

function App() {
    return (
    <div>
      <Navigation />

      <ContentItem />
      <ContentItem />
      <ContentItem />

    </div>
    );
}

export default App;