import { AboutPomodoro } from '../../pages/AboutPomodoro';
import { Home } from '../../pages/Home';
import { NotFound } from '../../pages/NotFould';
import { BrowserRouter, Route, Routes } from 'react-router';

export function MainRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-pomodoro/' element={<AboutPomodoro />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
