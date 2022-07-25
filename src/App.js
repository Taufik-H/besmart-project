import logo from './logo.png';
import './App.css';
import About from './components/About';
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Sponsor from './components/Sponsor';
import List from './components/List';
import Crd from './components/Card';
import Carousel from './components/Carousel';

import Pencegahan from './components/Pencegahan';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet"/>
      <Navbar></Navbar>
      <Hero></Hero>
      <Sponsor></Sponsor>
      <About></About>
      <List></List>
      <Crd></Crd>
      <Carousel></Carousel>
      <Pencegahan></Pencegahan>
      <Footer></Footer>
    </>
  );
}

export default App;
