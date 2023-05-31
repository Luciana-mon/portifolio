
import '../styles/components/informacoescontainer.sass';
import {AiFillPhone, AiOutlineMail, AiFillEnvironment}  from 'react-icons/ai';

const InformacoesContainer = () => {
  return (
    <section id='informacao-container'>
        <div className='info-card'>
            <AiFillPhone id='phone-icon' />
            <div>
                <h3>Telefone</h3>
                <p>(11)94046-0812</p>
            </div>
        </div>
        <div className='info-card'>
            <AiOutlineMail id='email-icon' />
            <div>
                <h3>Email</h3>
                <p>luciana.monsantos@gmail.com</p>
            </div>
        </div>
        <div className='info-card'>
            <AiFillEnvironment id='pin-icon' />
            <div>
                <h3>Localização</h3>
                <p>Maúa / SP </p>
            </div>
        </div>

    </section>
  );
};

export default InformacoesContainer;