import React from 'react';

import { Footer, Blog, Possibilities, Features, Whatgpt3, Header } from './containor';
import { Cta, Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <Whatgpt3 />
    <Features />
    <Possibilities />
    <Cta />
    <Blog />
    <Footer />
  </div>
);

export default App;