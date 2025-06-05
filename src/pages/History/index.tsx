import styles from './styles.module.css';

import { Trash2Icon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { Heading } from '../../components/Heading/Index';
import { MainTemplate } from '../../templetes/MainTemplate';

export function History() {
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
               {Array.from({length: 20}).map((_, index) => {
                return (
                  <tr key={index}>
                <td>Estudar</td>
                <td>25min</td>
                <td>05/06/2025</td>
                <td>Completa</td>
                <td>Foto</td>
              </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </Container>
    </MainTemplate>
  );
}
