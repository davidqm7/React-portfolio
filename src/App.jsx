import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/theme';

import Header from './components/Header/Header';
import About from './components/About/About';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import CommandPalette from './components/CommandPalette/CommandPalette';

export default function App() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');

  const toggleTheme = () => setIsDark(d => {
    const next = !d;
    localStorage.setItem('theme', next ? 'dark' : 'light');
    return next;
  });

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <CommandPalette toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}
