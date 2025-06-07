import { SaveIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';

export function Settings() {
 function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault(); 
 } 

  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>
      <Container>
        <p style={{ textAlign: 'center' }}>
          Mude as configurações para tempo de foco, descanso curto e descanso
          longo
        </p>
      </Container>

      <Container>
        <form onSubmit={handleSaveSettings} action="" className='form'>
          <div className='formRow'>
            <DefaultInput id='workTiime' labelText='Foco'/>
          </div>
          <div className='formRow'>
            <DefaultInput id='shortBreakTime' labelText='Descanso Curto'/>
          </div>
          <div className='formRow'>
            <DefaultInput id='longBreakTime' labelText='Descanso Longo'/>
          </div>
          <div className='formRow'>
            <DefaultButton icon={<SaveIcon/>} aria-label='Salvar configurações' title='Salvar configurações'/>
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
