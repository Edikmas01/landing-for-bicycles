
import './App.css'
import { About } from './components/About/About';
import { Hero } from './components/Hero/Hero'
import { Services } from './components/Services/Services';
import { Contact } from './components/Contact/Contact';

function App() {

  return (<>
    <Hero />
    <Services />
    <About />
    <Contact />
  </>)
}

export default App
