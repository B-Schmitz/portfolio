import { FaLinkedin, FaGithub, FaSteam, FaDiscord} from 'react-icons/fa';
import toast from 'react-hot-toast';
import { FooterSection } from './FooterElements';

function Footer() {

  const handleCopyDiscord = () => {
    toast.success('Discord copiado!');
      navigator.clipboard.writeText('Bernardo Schmitz#4131');
    };

  return (
    <FooterSection>
       <div className='Container'>
        <span>
          Coded with 💜 by{' '}
          <a href='https://github.com/B-Schmitz' target='_blank' rel='noopener noreferrer'>
            Bernardo Schmitz
          </a>
        </span>

        <ul>
          <li className='item'>
            <a href='https://www.linkedin.com/in/bernardo-ssantos/' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin />
            </a>
          </li>
          <li className='item'>
            <a href='https://github.com/B-Schmitz' target='_blank' rel='noopener noreferrer'>
              <FaGithub  />
            </a>
          </li>
          <li className='item'>
            <a href='https://steamcommunity.com/id/Selitto' target='_blank' rel='noopener noreferrer'>
              <FaSteam />
            </a>
          </li>
          <li className='item'>
            <i onClick={handleCopyDiscord}>
              <FaDiscord />
            </i>
          </li>
        </ul>
      </div>
    </FooterSection>
  );
}

export default Footer;
