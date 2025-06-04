import "./styles/theme.css";
import "./styles/global.css";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { Home } from "./pages/Home";
import { MessageContainer } from "./components/MessagesContainer"


export function App() {
  return (
    <TaskContextProvider>
      <MessageContainer>
      <Home />
      </MessageContainer>
    </TaskContextProvider>
  );
}
