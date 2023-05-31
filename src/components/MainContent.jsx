import ProjetosContainer from './ProjetosContainer';
import SobreContainer from './SobreContainer';
import TecnologiasContainer from './TecnologiasContainer';
import '../styles/components/maincontent.sass';

const MainContent = () => {
  return (
    <main id='main-content'>
        <SobreContainer />
        <TecnologiasContainer />
        <ProjetosContainer />
    </main>
  )
}

export default MainContent