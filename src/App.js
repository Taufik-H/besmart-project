import logo from './logo.svg';
import './App.css';
import About from './components/About';
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Sponsor from './components/Sponsor';
import List from './components/List';

function App() {
  return (
    <>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet"/>
      <Navbar/>
      <Hero></Hero>
      <Sponsor></Sponsor>
      <About></About>
<List></List>
    </>
  );
}

export default App;
