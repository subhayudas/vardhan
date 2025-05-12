import './App.css';
import Five from './components/Five/Five';
import Four from './components/Four/Four';
import Home from './components/Home/Home';
import Second from './components/Second/Second';
import Third from './components/Third/Third';
import SplineModel from './components/SplineModel/SplineModel';

function App() {
  return (
    <div className="App">
     <Home/>
     <Second/>
     <Third/>
     <SplineModel/>
     <Four/>
     <Five/>
     <div className="noise"></div>
     <div className="container"></div>
    </div>
  );
}

export default App;
