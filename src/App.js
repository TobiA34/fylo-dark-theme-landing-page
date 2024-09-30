 import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Info from './components/Info';
import NavComponent from './components/NavComponent';
import Productive from './components/Productive';
import Test from './components/Test';
 
import "./index.css";


function App() {
  return (
    <div>
      <NavComponent />
      <Hero />
      <Info />
      <Productive />
      <Test />
      <div className="overlay-main">
        <div className='overlay'>
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
