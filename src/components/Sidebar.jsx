import Avatar from '../img/perfil.jpeg';
import '../styles/components/sidebar.sass';
import InformacoesContainer from './InformacoesContainer';
import RedeSocial from './RedeSocial';

const Sidebar = () => {
  return (
    <aside id="sidebar">
        <img src={Avatar} alt="Luciana Monteiro" />
        <p className="title"> Desenvolvedora Junior</p>
       <RedeSocial />
       <InformacoesContainer />
        <a href="#" className="btn">
            Download curriculo
        </a>

    </aside>
  )
}

export default Sidebar