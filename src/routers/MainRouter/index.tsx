import { useEffect } from 'react';
import { AboutPomodoro } from '../../pages/AboutPomodoro';
import { Home } from '../../pages/Home';
import { NotFound } from '../../pages/NotFould';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return null;
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-pomodoro/' element={<AboutPomodoro />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
      <ScrollToTop></ScrollToTop>
    </BrowserRouter>
  );
}
