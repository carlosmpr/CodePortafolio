
import './App.css';
import {BrowserRouter ,Route} from 'react-router-dom'

import HomePage from './pages/HomePage';
import Navbar from './compnents/Navbar';
import Page from './pages/Page';
import Faq from './pages/Faq';
import Comments from './pages/comments';
import Citas from './pages/Citas';
import Consul from './pages/Consul';
import Footer from './compnents/Footer';


function App() {
  return (
    <BrowserRouter >
    <Navbar />
    <Route exact path="/" component={HomePage} />
    <Route exact path='/page' component={Page} />
    <Route exact path='/Faq' component={Faq} />
    <Route exact path='/Comentarios' component={Comments} />
    <Route exact path='/Citas' component={Citas} />
    <Route exact path='/Consul' component={Consul} />
    <Footer />
    
    </BrowserRouter>
   
  );
}

export default App;
