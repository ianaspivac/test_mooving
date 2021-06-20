
import './App.css';
import Header from './components/Header/Header'
import ActionsProperty from './components/ActionsProperty/ActionsProperty'
import FeaturedProperties from './components/FeaturedProperties/FeaturedProperties';
import Reviews from './Reviews/Reviews';
import Footer from './components/Footer/Footer';
import { ToastProvider} from 'react-toast-notifications';
import HeroSection from './components/HeroSection/HeroSection';

function App() {
  return (
    <div className="App">  
    <ToastProvider  placement="bottom-right" autoDismiss="true"> 
     <Header/>
     <HeroSection/>
     <ActionsProperty/>
     <FeaturedProperties/>
     <Reviews/>
     <Footer/>
     </ToastProvider>
    </div>
  );
}

export default App;
