
import {Provider} from 'react-redux'
import store from './components/redux/store'
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Design from './components/Design';
import Brushcontainer from './components/Brushcontainer';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import HooksBrushContainer from './components/HooksBrushContainer';
import ColorContainer from './components/ColorContainer';


function App() {
  return (
    <Provider store = {store}>
    <div className="App">
 < Header />
 <Home />
 <Design />
 {/* <HooksBrushContainer /> */}
 <Brushcontainer/>
 <ColorContainer />
 <Blogs />
  <Contact/>
  <Footer /> 
    </div>
    </Provider>
  );
}

export default App;
