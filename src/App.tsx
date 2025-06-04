import './styles/theme.css';
import './styles/global.css';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { Home } from './pages/Home';
import { MessageContainer } from './components/MessagesContainer';
import { BrowserRouter, Route, Routes } from 'react-router';

export function App() {
  return (
    <TaskContextProvider>
      <MessageContainer>
        <BrowserRouter>
          <Routes>
            <Route/>
            <Home />
          </Routes>
        </BrowserRouter>
      </MessageContainer>
    </TaskContextProvider>
  );
}
