import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";
import type { TaskStateModels } from "../../models/TaskStateModels";
import { MainTemplate } from "../../templetes/MainTemplate";

type HomeProps = {
  state: TaskStateModels, 
  setState: React.Dispatch<React.SetStateAction<TaskStateModels>>;
};

export function Home(props: HomeProps) {
  console.log(props);
  
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}
