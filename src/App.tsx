import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/Container';
import { Heading } from './components/Heading/Index';
import { Logo } from './components/Logo';

export function App() {
  return (
    <>
    <Container>
        <Logo />
    </Container>

    <Container>
        <Heading>LOGO</Heading>
    </Container>
    
    <Container>
        <Heading>LOGO</Heading>
    </Container>
    </>
);
}
