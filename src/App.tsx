import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Layout } from './components/Layout';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}

export default App;