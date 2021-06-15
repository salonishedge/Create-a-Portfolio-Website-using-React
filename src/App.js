import './App.css';
import PageWrapper from './components/PageWrapper';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import Contact from './components/Pages/Contact';
import Teams from './components/Pages/Teams';
import Portfolio from './components/Common/Portfolio';

function App() {
  return (
    <Router>
      <PageWrapper>
      
        <Route
          exact={true}
          path="/"
          component={Home}
        />
        <Route
          
          path="/about"
          component={About}
        />

        <Route
          
          path="/team"
          component={Teams}
        />
        <Route
          
          path="/portfolio"
          component={Portfolio}
        />
        <Route
          
          path="/services"
          component={Services}
        />
        <Route
          path="/contact"
          component={Contact}
        />
      
     </PageWrapper>
    </Router>
    
  );
}

export default App;
