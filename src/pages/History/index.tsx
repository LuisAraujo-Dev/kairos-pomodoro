import styles from './styles.module.css';

import { Trash2Icon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { Heading } from '../../components/Heading/Index';
import { MainTemplate } from '../../templetes/MainTemplate';
import { useTaskContext } from '../../contexts/TaskContext/UseTaskContext';

export function History() {
  const {state} = useTaskContext(); 

  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span>Histórico</span>
          <span className={styles.buttonContainer}>
            <DefaultButton
              icon={<Trash2Icon />}
              color='red'
              aria-label='Apagar todo o histórico'
              title='Apagar o histórico'
            />
          </span>
        </Heading>
      </Container>

      <Container>
        <div className={styles.responsiveTable}>
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Data</th>
                <th>Status</th>
                <th>Tipo</th>
              </tr>
            </thead>
            <tbody>
               {state.tasks.map((tasks => {
                return (
                  <tr key={tasks.id}>
                <td>{tasks.name}</td>
                <td>{tasks.duration}min</td>
                <td>{new Date(tasks.startDate).toISOString()}</td>
                <td>{tasks.interruptDate}</td>
                <td>{tasks.type}</td>
              </tr>
                )
              }))}
            </tbody>
          </table>
        </div>
      </Container>
    </MainTemplate>
  );
}
