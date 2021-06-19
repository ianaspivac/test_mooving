
import './App.css';
import Header from './components/Header/Header'
import ActionsProperty from './components/ActionsProperty/ActionsProperty'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import FeaturedProperties from './components/FeaturedProperties/FeaturedProperties';

function App() {
  return (
    <div className="App">   
     <Header/>
     <ActionsProperty/>
     <FeaturedProperties/>
    </div>
  );
}

export default App;
