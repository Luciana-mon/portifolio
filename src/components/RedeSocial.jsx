import '../styles/components/redesocial.sass';
import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa';

const socialNetwork = [
    {name: "linkedin",link:"https://www.linkedin.com/in/lucianamonteirosantos/", icon: <FaLinkedinIn />}, 
    {name: "github", link:"https://github.com/Luciana-mon", icon: <FaGithub />},
    {name: "instagram", link:"https://www.instagram.com/luciana_monsantos/", icon: <FaInstagram />}
];


const RedeSocial = () => {

  return (
    <section id='social-network'>
        {socialNetwork.map((network) => (
            <a href={network.link} className='social-btn' id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}

    </section>
  )
}

export default RedeSocial